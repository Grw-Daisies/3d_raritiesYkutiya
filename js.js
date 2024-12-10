let slideIndex = 0;

function showSlide(n)
{
    const slides = document.getElementsByClassName("slide");

    if (n >= slides.length)
    {
        slideIndex = 0;
    }

    if(n < 0)
    {
        slideIndex = slides.length -1;
    }

    for (var i=0; i< slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block"
}

function MoveSlide(n)
{
    showSlide(slideIndex += n);
}

showSlide(slideIndex);

function showSlideBtn0(n)
{
    const slides = document.getElementsByClassName("button_slide0");

    if (n >= slides.length)
    {
        slideIndex = 0;
    }

    if(n < 0)
    {
        slideIndex = slides.length -1;
    }

    for (var i=0; i< slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "flex"
}

function MoveSlideBtn0(n)
{
    showSlideBtn0(slideIndex += n);
}

showSlideBtn1(slideIndex);

function showSlideBtn1(n)
{
    const slides = document.getElementsByClassName("button_slide1");

    if (n >= slides.length)
    {
        slideIndex = 0;
    }

    if(n < 0)
    {
        slideIndex = slides.length -1;
    }

    for (var i=0; i< slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "flex"
}

function MoveSlideBtn1(n)
{
    showSlideBtn1(slideIndex += n);
}

showSlideBtn1(slideIndex);

function showSlideBtn2(n)
{
    const slides = document.getElementsByClassName("button_slide2");

    if (n >= slides.length)
    {
        slideIndex = 0;
    }

    if(n < 0)
    {
        slideIndex = slides.length -1;
    }

    for (var i=0; i< slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "flex"
}

function MoveSlideBtn2(n)
{
    showSlideBtn2(slideIndex += n);
}

showSlideBtn2(slideIndex);