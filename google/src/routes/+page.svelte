<style>
    a{
        text-decoration: none;
        color: inherit;
    }
    a:hover {
        text-decoration: underline;
    }
    header {    
        display: flex;
        align-items: center;
        padding: 6px;
        height: 60px;
        flex-shrink: 0;
        box-sizing: border-box;
        flex-grow: 1;
        min-width: auto;
        width:100%;
        flex-direction: row-reverse;
    }
    .header-selection-container {
        position: relative;
        height: 48px;
        float: right;
        padding: 0 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
    .header-selection-texts{
        color: #000000;
        display: flex;
        align-items: center;
        gap: 1rem;

    }

    .header-selection-images{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .sign-in-btn{
        cursor: pointer;
        color: #ffffff;
        text-decoration: none;
        background: #1b66c9;
        box-shadow: 0 1px 3px 1px rgb(66 64 67 / 15%), 0 1px 2px 0 rgb(60 64 67 / 30%);
        margin-left: 8px;
        border: 1px solid transparent;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0.25px;
        line-height: 16px;
        margin-left: 10px;
        margin-right: 8px;
        min-width: 96px;
        padding: 9px 23px;
        text-align: center;
        vertical-align: middle;
        -webkit-border-radius: 4px;
        border-radius: 4px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        outline: none;
        display: inline-block;
    }

    main{
        height: calc(100% - 300px);
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #google-logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 92px;
        max-height: 160px;
        padding: 20px;
        margin: 0 auto;
        margin-top: 60px;
        padding-top: 6px;
        width: auto;
        max-width: 584px;
        position: relative;
    }
    #input-bar {
        display: flex;
        align-items: center;
        z-index: 3;
        height: 44px;
        background: #fff;
        border: 1px solid #dfe1e5;
        box-shadow: none;
        border-radius: 24px;
        width: 180%;
        max-width: 584px;
        padding: 12px 18px 10px 12px;
    }
    #input-bar input {
    height: 100%;
    width: 100%;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.87);
    word-wrap: break-word;
    outline: none;
    display: flex;
    -webkit-tap-highlight-color: transparent;
    }
    #input-bar-right-container{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    #search-btns {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-top: 20px;
        height: 70px;
    }
    #search-btns button {
        background-color: #f8f9fa;
        border: 1px solid #f8f9fa;
        border-radius: 4px;
        color: #3c4043;
        font-family: arial,sans-serif;
        font-size: 14px;
        margin: 11px 4px;
        padding: 0 16px;
        line-height: 27px;
        height: 36px;
        min-width: 54px;
        text-align: center;
        cursor: pointer;
        user-select: none;
    }
    #language-offers a{
        color: #1a0dab;
    }
    footer {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100px;
        box-sizing: border-box;
        width:100vw;
        background-color: #f2f2f2;
        font-size: 15px;
        color: #70757a;
        overflow: hidden;
    }
    footer > div {
        height: 50px;
        padding: 0px 15px;
    }
    footer > div a{
        padding: 15px;
    }
    #footer-language{
        border-bottom: #dadce0 1px solid;
        display: flex;
        align-items: center;
    }
    #about{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }
</style>

<script lang=ts>
    import GoogleAppsSvg from "./GoogleAppsSVG.svelte";
	import GoogleCameraSvg from "./GoogleCameraSVG.svelte";
	import GoogleMicrophoneSvg from "./GoogleMicrophoneSVG.svelte";
	import GoogleSearchSvg from "./GoogleSearchSVG.svelte";
    import { onMount } from "svelte";

    let userPosition: string | {latitude:number,longitude:number} = ''
    onMount(async () => {
        navigator.geolocation.getCurrentPosition((position) => {
            userPosition = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
        });
    });
    
</script>

<header>
    <div class="header-selection-container">
        <div class="header-selection-texts">
            <a class="header-selection-text" href="https://mail.google.com/mail/">Gmail</a>
            <a class="header-selection-text" href="https://www.google.co.il/imghp?hl=en&ogbl">Images</a>
        </div>
        <div class="header-selection-images">
            <svelte:component this={GoogleAppsSvg} />
            <a class="sign-in-btn" href="https://accounts.google.com/ServiceLogin?hl=en&amp;passive=true&amp;continue=https://www.google.com/&amp;ec=GAZAmgQ" target="_top">Sign in</a>
        </div>
    </div>
</header>

<main>
    <div>
        <div id="google-logo"><img src="/google.png" alt="google-logo"/></div>

        <form method="POST" role="search">
            <input type="text" name="userPosition" value={JSON.stringify(userPosition)} hidden/>
            <div id="input-bar">
                <svelte:component this={GoogleSearchSvg} />
                <input type="text" name="searchQuery"/>
                <div id="input-bar-right-container">
                    <svelte:component this={GoogleMicrophoneSvg} />
                    <svelte:component this={GoogleCameraSvg} />
                </div>
            </div>
            <div id="search-btns">
                <button type="submit">Google Search</button>
                <button type="button">I'm Feeling Lucky</button>
            </div>
            <div id="language-offers">Google offered in: <a dir="rtl" href="https://www.google.com/setprefs?sig=0_WCA61GKU5MMIPYl0OZNfeKUBN70%3D&hl=iw&source=homepage&sa=X&ved=0ahUKEwjWzrKtmZD8AhXPDewKHcQnAEMQ2ZgBCBM">עברית</a> <a dir="rtl" href="https://www.google.com/setprefs?sig=0_WCA61GKU5MMIPYl0OZNfeKUBN70%3D&hl=ar&source=homepage&sa=X&ved=0ahUKEwjWzrKtmZD8AhXPDewKHcQnAEMQ2ZgBCBQ">العربية</a> </div>
        </form>
    </div>
</main>


<footer>
    <div id="footer-language">
        <a href="https://policies.google.com/terms?hl=en-IL&fg=1">Israel</a>
    </div>
    <div id="about">
        <div>
            <a href="https://about.google/?utm_source=google-IL&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</a>
            <a href="https://www.google.com/intl/en_il/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertising</a>
            <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">Business</a>
            <a href="https://google.com/search/howsearchworks/?fg=1">How Search works</a>
        </div>
        <div>
            <a href="https://policies.google.com/privacy?hl=en-IL&fg=1">Privacy</a>
            <a href="https://policies.google.com/terms?hl=en-IL&fg=1">Terms</a>
            <a href="https://policies.google.com/terms?hl=en-IL&fg=1">Settings</a>
        </div>
    </div>
</footer>
