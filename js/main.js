$(document).ready(function(){

    //Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 1200,
        responsive: true
    });

    //Post
    var posts = [
        {
            title: 'Home de Foc',
            date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'El Home de Foc es una figura de la entidad creada prácticamente a la par que la colla de Diables. Es una de las pocas figuras que tienen pirotecnica en la base de la cabeza a conjunto con dos guanteletes.'
        },
        {
            title: 'Bèliak',
            date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'La figura de Bèliak le otorga el poder del infierno, dentro de allí él es el rey. Tiene un séquito de diablos manejados a su antojo.'
        },
        {
            title: 'Diablessa',
            date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'La figura de la Diablessa es bastante parecida a la de Bèliak, pero mucho más honorable. Es la única figura que lleva vestido dentro de la entidad.'
        },
        {
            title: 'Belcebú',
            date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Belcebú es la figura que encarna a uno de los príncipes del infierno, séquito de Bèliak. Lleva un tridente distinto al de los demás.'
        },
    ]

    posts.forEach((item, index) => {
        var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Leer más</a>
            </article>
        `;
    
        $("#posts").append(post);
    });

    //Scroll hacia arriba
    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //Login falso PRUEBA
    /* 
    $("#login form").submit(function(){
        var form_name = $("form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");
    if(form_name != null || form_name != "undefined"){
        var about_parrafo = $("#about p");
        about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    */
    
    //Validación form
    if(window.location.href.indexOf('contact') > -1){
        $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scrollToTopOnError: true
    });
    }
    

});