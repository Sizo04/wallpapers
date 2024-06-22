$(document).ready(function () {
    var images = [
        { src: 'image1.png', caption: 'TOWER', name: "ace" },
        { src: 'image2.jpg', caption: 'Image 2', name: "ace2" },
        { src: 'image3.jpg', caption: 'Image 3' },
        { src: 'image4.jpg', caption: 'Image 4' }
    ];

    var wallpapers = $(".wallpapers");
    images.forEach(function (image) {
        var img = $("<img>").attr("src", image.src).attr('alt', image.caption).attr('class', "col mx-.1 my-1 wp-img")
        wallpapers.append(img);


        img.click(function () {
            $(".showcase-image").attr("src", image.src)
            $(".image-caption").text(image.caption);
            $(".image-showcase").css("display", "block")
        })

        $("download-img").click(function () {
            img.toDataUrl(img.src)
        })
    });


    $(".close-img").click(function () {
        $(".image-showcase").css("display", "none")

    })

})