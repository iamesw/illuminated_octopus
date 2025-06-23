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

    eleventyConfig.addAsyncShortcode("res_image", async function (
  mobileSrc,
  desktopSrc,
  alt,
  widths = [800, 1600],
  sizes = "100vw"
    ) {
  let formats = ["webp", "jpeg"];
  let outputDir = path.join(eleventyConfig.dir.output, "img");

  // Generate metadata
  const mobileMetadata = await eleventyImage(path.join(centralImagePath, mobileSrc), {
    widths,
    formats,
    outputDir,
    urlPath: "/img/"
  });

  const desktopMetadata = await eleventyImage(path.join(centralImagePath, desktopSrc), {
    widths,
    formats,
    outputDir,
    urlPath: "/img/"
  });

  function buildSources(metadata, mediaQuery) {
    return Object.values(metadata).map(imageFormat => {
      return `<source type="image/${imageFormat[0].format}" media="${mediaQuery}" srcset="${imageFormat.map(entry => `${entry.url} ${entry.width}w`).join(', ')}" sizes="${sizes}">`;
    }).join('\n');
  }

  // Build <source> blocks
  const mobileSources = buildSources(mobileMetadata, "(max-width: 768px)");
  const desktopSources = buildSources(desktopMetadata, "(min-width: 769px)");

  // Get fallback image (largest JPEG)
  const fallback = desktopMetadata.jpeg[desktopMetadata.jpeg.length - 1];

  const fallbackImg = `<img
    src="${fallback.url}"
    width="${fallback.width}"
    height="${fallback.height}"
    alt="${alt}"
    loading="lazy"
    decoding="async">`;

  return `<picture>
    ${mobileSources}
    ${desktopSources}
    ${fallbackImg}
    </picture>`;

});
};