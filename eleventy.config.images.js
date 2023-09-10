const path = require("path");
const eleventyImage = require("@11ty/eleventy-img");

module.exports = eleventyConfig => {
    // Central image folder path
    const centralImagePath = path.join(__dirname, "/images");

    // Relative path Eleventy Image shortcode
    eleventyConfig.addAsyncShortcode("image", async function relativeImageShortcode(src, alt, widths, sizes) {
        let formats = ["webp", "auto"];
        let file = relativeToInputPath(this.page.inputPath, src);
        let metadata = await eleventyImage(file, {
            widths: widths || ["auto"],
            formats,
            outputDir: path.join(eleventyConfig.dir.output, "img"),
        });

        let imageAttributes = {
            alt,
            sizes,
            loading: "lazy",
            decoding: "async",
        };
        return eleventyImage.generateHTML(metadata, imageAttributes);
    });

    // Absolute path Eleventy Image shortcode
    eleventyConfig.addAsyncShortcode("_image", async function absoluteImageShortcode(src, alt, widths, sizes) {
        let formats = ["webp", "auto"];
        let file = path.join(centralImagePath, src); // Construct the absolute path

        let metadata = await eleventyImage(file, {
            widths: widths || ["auto"],
            formats,
            outputDir: path.join(eleventyConfig.dir.output, "img"),
        });

        let imageAttributes = {
            alt,
            sizes,
            loading: "lazy",
            decoding: "async",
        };
        return eleventyImage.generateHTML(metadata, imageAttributes);
    });

    function relativeToInputPath(inputPath, relativeFilePath) {
        let split = inputPath.split("/");
        split.pop();

        return path.resolve(split.join(path.sep), relativeFilePath);
    }
};
