$(document).ready(function () {
    var images = [
        { src: './wallpapers/wpp1.jpg', caption: 'Nature', name: "Lake Storm", res: "1920x1080", favorited: false, },
        { src: './wallpapers/wpp2.jpg', caption: 'Nature', name: "Green Hills", res: "1920x1080", favorited: false, },
        { src: './wallpapers/wpp8.png', caption: 'Digital', name: "Firetower", res: "1920x1080", favorited: false, },
        { src: './wallpapers/wpp3.jpg', caption: 'Nature', name: "Tree Bench", res: "1920x1080", favorited: false, },
        { src: './wallpapers/wpp4.jpg', caption: 'Nature', name: "Leaf", res: "1920x1080", favorited: false, },
        { src: './wallpapers/wpp9.jpg', caption: 'Digital', name: "Pink Tree Beach", res: "1920x1080", favorited: false, },
        { src: './wallpapers/wpp5.jpg', caption: 'Nature', name: "Blue Flowers", res: "1920x1080", favorited: false, },
        { src: './wallpapers/wpp6.jpg', caption: 'Nature', name: "Lake Rock", res: "1920x1276", favorited: false, },
        { src: './wallpapers/wpp7.jpg', caption: 'Nature', name: "Forest Waterfall", res: "1920x1212", favorited: false, },
        { src: './wallpapers/wpp10.jpg', caption: 'Digital', name: "Meadow", res: "1920x1080", favorited: false, },
        { src: './wallpapers/wpp11.jpg', caption: 'Cars', name: "Mustang 1969", res: "1920x1494", favorited: false, },
        { src: './wallpapers/wpp12.jpg', caption: 'Cars', name: "Huracan", res: "1920x1280", favorited: false, },
        { src: './wallpapers/wpp13.jpg', caption: 'Cars', name: "Challanger", res: "1920x1280", favorited: false, },
        { src: './wallpapers/wpp14.jpg', caption: 'Cars', name: "911 GT2", res: "1920x1280", favorited: false, },
        { src: './wallpapers/wpp15.jpg', caption: 'Cars', name: "MK7 GTI", res: "1920x1281", favorited: false, },
        { src: './wallpapers/wpp16.jpg', caption: 'Digital', name: "Fantasy Waterfall", res: "1920x1085", favorited: false, },
        { src: './wallpapers/wpp17.jpg', caption: 'Digital', name: "Fantasy River", res: "1920x1188", favorited: false, },
        { src: './wallpapers/wpp18.jpg', caption: 'Digital', name: "Valley", res: "1920x1080", favorited: false, },
        { src: './wallpapers/wpp19.jpg', caption: 'Digital', name: "Frozen Forest", res: "1920x1188", favorited: false, },
        { src: './wallpapers/wpp20.jpg', caption: 'Digital', name: "Castle", res: "1920x1080", favorited: false, },





    ];
    var wallpapers = $(".wallpapers");

    currentImage = '';


    //function to load images
    function loadImages(images) {
        images.forEach(function (image) {

            var img = $("<img>").attr("src", image.src).attr('alt', image.caption).attr('class', "col mx-1 my-1 wp-img");

            wallpapers.append(img);

            img.click(function () {
                $(".showcase-image").attr("src", image.src)
                $(".image-caption").text(image.name);
                $(".image-resolution").text(image.res);
                $(".image-showcase").css("display", "block")
                currentImage = image;
            })

            $("download-img").click(function () {
                img.toDataUrl(img.src)
            })
        })

    }

    loadImages(images);


    $(".nav-btn").click(function () {

        $(".nav-btn").removeClass("active");

        $(".favorites-btn").removeClass("active")

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



    $(".favorite-img").click(function () {
        currentImage.favorited = true;
    })

    //Load favorited images
    $(".favorites-btn").click(function () {
        $(".nav-btn").removeClass("active");
        $(".favorites-btn").addClass("active");
        $(".wallpapers").empty();

        //return only favorited images
        var favourited = images.filter(function (image) {
            return image.favorited === true;
        })

        loadImages(favourited);
    })


    $(".close-img").click(function () {
        $(".image-showcase").css("display", "none")

    })

})