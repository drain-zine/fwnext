const getYoutubeIframe = (link, width, height) => (
    <iframe width={width} height={height} src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
);

export default getYoutubeIframe;