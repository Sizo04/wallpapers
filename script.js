$(document).ready(function () {
    var images = [
        { src: 'wpp1.jpg', caption: 'Nature', name: "Lake Storm", res: "1920x1080" },
        { src: 'wpp2.jpg', caption: 'Nature', name: "Green Hills", res: "1920x1080" },
        { src: 'wpp8.png', caption: 'Digital', name: "Firetower", res: "1920x1080" },
        { src: 'wpp3.jpg', caption: 'Nature', name: "Tree Bench", res: "1920x1080" },
        { src: 'wpp4.jpg', caption: 'Nature', name: "Leaf", res: "1920x1080" },
        { src: 'wpp9.jpg', caption: 'Digital', name: "Pink Tree Beach", res: "1920x1080" },
        { src: 'wpp5.jpg', caption: 'Nature', name: "Blue Flowers", res: "1920x1080" },
        { src: 'wpp6.jpg', caption: 'Nature', name: "Lake Rock", res: "1920x1276" },
        { src: 'wpp7.jpg', caption: 'Nature', name: "Forest Waterfall", res: "1920x1212" },
        { src: 'wpp10.jpg', caption: 'Digital', name: "Meadow", res: "1920x1080" },

    ];
    var wallpapers = $(".wallpapers");



    function loadImages(images) {
        images.forEach(function (image) {

            var img = $("<img>").attr("src", image.src).attr('alt', image.caption).attr('class', "col mx-1 my-1 wp-img");

            wallpapers.append(img);

            img.click(function () {
                $(".showcase-image").attr("src", image.src)
                $(".image-caption").text(image.name);
                $(".image-resolution").text(image.res);
                $(".image-showcase").css("display", "block")
            })

            $("download-img").click(function () {
                img.toDataUrl(img.src)
            })
        })

    }

    loadImages(images);


    $(".nav-btn").click(function () {

        $(".nav-btn").removeClass("active");

        $(this).addClass("active");


        if ($(".nav-btn").hasClass("active")) {
            var activeClass = $(".nav-btn.active").text();

        }



        var filteredImages = images.filter(function (image) {
            return image.caption === activeClass;
        });


        $(".wallpapers").empty();

        loadImages(filteredImages);


    })









    $(".close-img").click(function () {
        $(".image-showcase").css("display", "none")

    })

})