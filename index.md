<link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
    type="text/css">
<link rel="stylesheet" href="./css/main.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<!-- Localization SECTION <3 -->
<div id="localization" class="localization">
    <select onchange="changeLocalization(this)" id="localization-select" class="form-select " aria-label="Select Language" title="Select Language" tabindex="0">

    </select>
    <select onchange="changeTheme(this)" id="theme-select" class="form-select " aria-label="Select Theme" title="Select Theme" tabindex="0">
        <option value="default">Default</option>
        <option value="upsideDown">The Upside Down</option>
    </select>
</div>

<script type="module">
    import { get_localization } from './assets/localization.js';

    // Set Localization Object to Window
    window.localization = get_localization();

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    $(document).ready(function(){

        const select = document.getElementById('localization-select');

        window.localization.options.forEach((option) => {
            Object.keys(option).forEach((key) => {
                const opt = document.createElement('option');
                    opt.value = key;
                    opt.innerHTML = option[key];
                select.appendChild(opt);
            });
        });

    });

</script>
<script>
    function changeLocalization(locale) {
        const localization = window.localization;
        Object.keys(localization[locale.value]).forEach((key) => {
            const element = document.getElementById(key);
            element.innerHTML = localization[locale.value][key];
            window.voice_lang = localization[locale.value]['voice_lang'];
            window.voice_number = localization[locale.value]['voice_number'];
        });
    }
</script>

<!-- End Localization -->

<!-- ACCESIBILITY SECTION <3 -->
<script>
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Init Accessibility if available
    if ('speechSynthesis' in window) {
        const speakData = new SpeechSynthesisUtterance();
        window.speechSynthesis.onvoiceschanged = async function() {
            const voices = window.speechSynthesis.getVoices();
            const elements = document.getElementsByClassName('tts');
            window.voice_lang = 'en-US';
            Array.from(elements).forEach((element) => element.style.opacity = 1 );
            window.speak = async function (text) {
                speechSynthesis.cancel();
                const element_speech = document.getElementById(text).innerText;

                // create a SpeechSynthesisUtterance to configure the how text to be spoken
                const speakData = new SpeechSynthesisUtterance();

                speakData.volume = 1; // From 0 to 1
                speakData.rate = 1; // From 0.1 to 10
                speakData.pitch = 1; // From 0 to 2
                speakData.text = element_speech;
                speakData.lang = window.voice_lang;
                speakData.voice = voices[window.voice_number];

                // something to fix long strings from breaking
                let myTimeout;

                function myTimer() {
                    window.speechSynthesis.pause();
                    window.speechSynthesis.resume();
                    myTimeout = setTimeout(myTimer, 10000);
                }

                window.speechSynthesis.cancel();
                myTimeout = setTimeout(myTimer, 10000);

                speakData.onend = function() { clearTimeout(myTimeout); }
                window.speechSynthesis.speak(speakData);

            }
        };
        // TODO TTS Options only load if speechSynthesis available
    } else {
        console.log(' Text-to-speech not supported. ');
    }



</script>
<!-- End Accessibility -->

<div id="headerControls" class="headerControls tooltip" ondblclick="resetTimeControl()">
    <div class="button sun"><i class="fas fa-sun" role="presentation"></i></div>
    <label for="dayNightSlider" class="hide-element">
        Day Night Slider
    </label>
    <input type="range" id="dayNightSlider" name="dayNightSlider" oninput="changeTimeOfDay(this.value)"
        onchange="changeTimeOfDay(this.value)" min="1" max="100" value="0">
    <div class="button moon"><i class="fas fa-moon" role="presentation"></i></div>
    <span id="double-click" class="tooltiptext tooltip-bottom hidden">Double Click to Reset</span>
</div>

<script>
    document.documentElement.style
        .setProperty('overflow', 'hidden auto');
    document.documentElement.id = 'deep';

    let overrideTimeOfDay = false;
    function changeTimeOfDay(value) {
        document.getElementById('double-click').classList.remove('hidden');
        overrideTimeOfDay = true;
        document.documentElement.style
            .setProperty('--timeOfDayOpacity', value / 100);

    }

    // Ticker Display (displaying time)
    let ticker = 0;
    let direction = 'ascending';

    window.setInterval(function () {
        if (!overrideTimeOfDay) {
            if (direction == 'ascending') ticker++;
            else ticker--;
            if (ticker == 0) direction = 'ascending';
            if (ticker == 100) direction = 'descending';
            document.documentElement.style
                .setProperty('--timeOfDayOpacity', ticker / 100);
            document.getElementById('dayNightSlider').value = ticker;
        }
    }, 1000);

    function resetTimeControl() {
        document.getElementById('double-click').classList.add('hidden');
        ticker = 0;
        document.documentElement.style
            .setProperty('--timeOfDayOpacity', 0);
        document.getElementById('dayNightSlider').value = 0;
        overrideTimeOfDay = false;
    }
</script>

<div class="row" id="first-row">
    <div class="row-logo" style="background-image:url('assets/Watermelon_Monochromatic.svg');"></div>
    <div class="row-item">
        <h3 style="position: relative;">Matthew Grady ☕
            <i class="fa-solid fa-volume-high tts" role="button" title="Introduction text-to-speech." tabindex="0"
                aria-label="Introduction text-to-speech." onclick="speak('about')"></i>
            <a style="position: absolute; right: 0px;" href="https://linkedin.com/in/matthew-grady-orlando">
                <img class="hover-friends"
                    src="assets/LI-In-Bug.png" alt="Linked In Hyperlink Image" style="
                    float: right; max-width: 66px;
                    padding: 5px 15px;
                    border: 1px solid #155799;
                    background: rgba(21, 87, 153, .05);
                    border-radius: 5px; max-height: 29.06px;">
            </a>
        </h3>
        <div id="about"> Hi, I'm Matthew. I do solo and agile full-stack stuff and things from behind some monitors. In my free time, I like to enjoy time with my Wife and friends. I also enjoy activities such as Twitch/YouTube, code tinkering,
        gaming and a wide array of outdoorsy stuff. This page is a personal tinkering project where I work on the things that I love as well as new stuff. The repo is public, feel free to inspect the code if you want to replicate how I accomplished anything. Get connected at <a
            href="https://linkedin.com/in/matthew-grady-orlando">LinkedIn</a>.</div>
    </div>
</div>
<script>

    const header = document.getElementsByTagName("header");
    window.onwheel = function (event) {
        headerScrollFunction(event)
    };

    const starCont = document.createElement('div');
    for (let i = 0; i < 200; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        header[0].appendChild(particle);
        const star = document.createElement('div');
        star.classList.add('star');
        starCont.appendChild(star);
    }
    header[0].appendChild(starCont);
    async function headerScrollFunction(event) {
        const headerControls = document.getElementById('headerControls');
        if (document.documentElement.scrollTop > 10 && document.documentElement.scrollTop < 200 && event.deltaY > 0) {
            headerControls.classList.remove('controlsExpanded');
            headerControls.classList.add('controlsCollapsed');
            header[0].classList.remove('expand');
            header[0].classList.add('collapse');
            $("#first-row").animate({ scrollTop: 0 }, "fast");
            document.getElementById('localization').style.top = '44px';
        } else if (document.documentElement.scrollTop === 0 && event.deltaY < 0) {
            headerControls.classList.remove('controlsCollapsed');
            headerControls.classList.add('controlsExpanded');
            header[0].classList.remove('collapse');
            header[0].classList.add('expand');
            document.getElementById('skip-to-content').scrollIntoView({
                behavior: 'smooth'
            });
            document.getElementById('localization').style.top = '334px';
        }
    }
</script>

<div class="parachute">
    <div class="parachute__img"></div>
</div>

<div class="plane">

</div>

<div class="row">
    <div class="row-logo" style="background-image:url('assets/Statue of liberty_Monochromatic.svg');"></div>
    <div class="row-item">
        <h3 style="position: relative;">10XTS
            <i class="fa-solid fa-volume-high tts" role="button" title="Employment information text-to-speech." tabindex="0"
            aria-label="Employment information text-to-speech." onclick="speak('employment')"></i>
            <a style="position: absolute; right: 0px;" href="mailto: info@10xts.com">
                <img src="assets/10xts.png" alt="Mail to 10XTS Hyperlink Image" style=" float: right; max-width: 66px;
    padding: 5px 15px;
    border: 1px solid #155799;
    background: rgba(21, 87, 153, .05);
    border-radius: 5px;">
            </a>
        </h3>
        <div id="employment">
            I'm currently working with a FinTech company out of Ohio. We are working to provide
            regulatory frameworks for operating on distributed/decentralized ledgers. Contact us at 10XTS to learn more about
            launching, managing and securing traditional asset classes on new and exciting databases.
        </div>
    </div>
</div>

<div class="row">
    <div class="row-logo" style="background-image:url('assets/Data Arranging_Monochromatic.svg');"></div>
    <div class="row-item">
        <h3>Stuff & Things (But not limited to)

            <i class="fa-solid fa-volume-high tts" role="button" title="Listen to Job Skills" tabindex="0"
            aria-label="Listen to Job Skills" onclick="speak('jobSkills')"></i>
        </h3>
        <ul id="jobSkills" style="list-style-position: inside; padding: 0px;">
            <li>Linux, MacOS and Windows</li>
            <li>Agile Teams</li>
            <li>Node, Python, C#</li>
            <li>HTML, JS, CSS, SCSS</li>
            <li>Angular, Django</li>
            <li>GIS, D3</li>
            <li>Adobe Creative Cloud, Microsoft Suite</li>
            <li>MongoDB, Postgres, MySql, MSSql</li>
            <li>Distributed Ledgers/Databases/Contracts</li>
            <li>Cloud</li>
            <li>Coffee & Tea Logistics, Production and Consumption</li>
        </ul>
    </div>
</div>

<div class="row wide-stuffs" style="width: 100vw; z-index: 0; position: relative;
    margin: 0px;
    margin-left: calc(50% - 50vw);
    margin-bottom: 50px; flex-wrap: wrap;">
    <div class="row-logo" style="background-image:url('assets/America_Monochromatic.svg');"></div>
    <div class="row-item flex-grow">
        <h3>Bits & Bobs
            <i class="fa-solid fa-volume-high tts" role="button" title="ARCGIS mapping text-to-speech." tabindex="0"
            aria-label="ARCGIS mapping text-to-speech." onclick="speak('bobs')"></i>
        </h3>
        <div id="bobs">
            Explore strange new worlds using ARCGIS.
        </div>
    </div>
    {% include_relative map.md %}
</div>

<div class="row wide-stuffs" style="width: 100vw;
    z-index: 0;
    position: relative;
    margin: 0px;
    margin-left: calc(50% - 50vw);
    margin-bottom: 50px;
    flex-wrap: wrap;">
    <div class="row-logo" style="background-image:url('assets/Spotlight _Monochromatic.svg');"></div>
    <div class="row-item" style="flex: 1;">
        <h3>Curiosity Chart
            <i class="fa-solid fa-volume-high tts" role="button" title="D3 charting text-to-speech." tabindex="0"
            aria-label="D3 charting text-to-speech." onclick="speak('d3')"></i>
        </h3>
        <div id="d3">
            Check out this D3 sandbox.
        </div>
    </div>
    {% include_relative d3.md %}
</div>

<div class="row">
    <div class="row-logo" style="background-image:url('assets/Brainstorming session _Monochromatic.svg');"></div>
    <div class="row-item">
        <h3>Special Thanks
            <i class="fa-solid fa-volume-high tts" role="button" title="Special thanks text-to-speech." tabindex="0"
            aria-label="Special thanks text-to-speech." onclick="speak('special')"></i>
        </h3>
        <div id="special">
            My Wife, my parents, the open-source community, the great people of my great home State of Florida, my friends, my family, my
            co-workers, my colleagues and my mentors who have helped me and continue to help me to become not only a better
            engineer & architect, but a better person. Thank you to <a
            href="https://www.manypixels.co/gallery">ManyPixels Vectors</a> for the graphical assets assistance. Thanks to all the Public/Private workers behind the Public Works datasets visualized on this page.
        </div>
    </div>
</div>
<div class="row">
    <div class="row-logo" style="background-image:url('assets/Web Developer_Monochromatic.svg');"></div>
    <div class="row-item">
        <h3>Final Thoughts
            <i class="fa-solid fa-volume-high tts" role="button" title="Accessibility text-to-speech." tabindex="0"
            aria-label="Accessibility text-to-speech." onclick="speak('accessibility')"></i>
        </h3>
        <div id="accessibility">
            This page is WCAG 2.1 Level AA compliant. In 2018, Section 508 was officially updated to include new requirements that reflect technological developments. These requirements alongside the requirements of the ADA and WCAG 2.0 directly benefit users who have accessibility needs due to disabilities. They then represent crucial tools with which we can build a better and more inclusive web. This page attempts to integrate these concepts.
        </div>
    </div>
</div>

<script>

</script>

<div class="row wide-stuffs footer-stuffs stars" style="position: absolute;
    left: 0px;
    right: 0px;
    margin: 0px;
    margin-left: calc(50% - 50vw);">
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
    <div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
    <div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
    </div>
    <div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
                <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <svg width="0" height="0">
            <!-- Back Layer -->
            <filter id="filter-back">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="4" />
            <feDisplacementMap  in="SourceGraphic" scale="170" />
            </filter>
            <!-- Middle Layer -->
            <filter id="filter-mid">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" />
            <feDisplacementMap  in="SourceGraphic" scale="150" />
            </filter>
            <!-- Front Layer -->
            <filter id="filter-front">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" />
            <feDisplacementMap  in="SourceGraphic" scale="100" />
            </filter>
        </svg>
    </div>
</div>

<div style="z-index:100; position: relative; top: 400px;">
    <div id="rocket" class="rocket" style="transform: scale(.3); bottom: 0px;">
        <div id="rocketBody" class="rocket-body">
            <div class="body"></div>
            <div class="fin fin-left"></div>
            <div class="fin fin-right"></div>
            <div class="window"></div>
        </div>
        <div style="height: 60px;" id="flame">
            <div class="red flame"></div>
            <div class="orange flame"></div>
            <div class="yellow flame"></div>
            <div class="white flame"></div>
            <div class="blue circle"></div>
            <div class="black circle"></div>
        </div>
    </div>
</div>
<script>
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const generateThrust = async function (direction = 1, pause = false, multiplier = 1) {
        const scrollHeight = document.getElementById('content').scrollHeight;
        const rocket = document.getElementById('rocket');
        let bottom = parseFloat(rocket.style.bottom);

        const flame = document.getElementById('flame');
        const rocketBody = document.getElementById('rocketBody');
        const scale = .3;
        const scaleFactor = scale + (bottom / (scrollHeight * 100));
        const transformAmount = scaleFactor;

        rocket.style.transform = `scale(${transformAmount}) rotate(${transformAmount / 100}turn)`;
        rocket.style.right = `-${multiplier / 100}px`;

        const thrustRange = [1, 3];
        const thrust = (thrustRange[0] + thrustRange[1]) / 2;
        const increment = thrust / scrollHeight;

        await sleep(1);
        if (direction === 1) {
            multiplier -= 5;
            let incrementFallen = (increment * multiplier);
            if (incrementFallen < 1) incrementFallen = 1;
            bottom = bottom - incrementFallen;

            rocket.style.bottom = bottom + 'px';
            if (bottom <= 0) {
                flame.classList.remove('container');
                rocketBody.classList.remove('rocketBounce');
                await sleep(15000);
            } else {
                generateThrust(1, false, multiplier);
            }
        } else {
            multiplier += 5;
            rocketBody.classList.add('rocketBounce');
            flame.classList.add('container');
            if (pause) await sleep(20000);
            bottom = bottom + (increment * multiplier);
            rocket.style.bottom = bottom + 'px';
            if (bottom >= (scrollHeight * 2)) {
                const startingMultiplier = scrollHeight * 3;
                generateThrust(1, false, startingMultiplier);
            } else {
                generateThrust(0, false, multiplier);
            }
        }
    };

    generateThrust(0);
</script>

<script>
    $(document).ready(function(){
        $(this).scrollTop(0);
    });
</script>

<script>
    const body = document.body;
    function changeTheme(slug) {
        body.classList.remove('upsideDown');
        switch(slug.value) {
            case 'upsideDown':
                body.classList.add('upsideDown');
                break;
            default:
                break;
        }
    }

</script>
