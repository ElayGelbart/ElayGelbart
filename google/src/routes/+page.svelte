<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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
        color: #5f6368;
    }

    .header-selection-images{
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    #google-logo {
        min-height: 92px;
        max-height: 290px;
        height: calc(100% - 560px);
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
        margin: 0 auto;
        width: 100%;
        max-width: 584px;
        padding: 5px 8px 0 14px;
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
    footer > div span{
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

<script>
    import GoogleAppsSvg from "./GoogleAppsSVG.svelte";
	import GoogleCameraSvg from "./GoogleCameraSVG.svelte";
	import GoogleMicrophoneSvg from "./GoogleMicrophoneSVG.svelte";
	import GoogleSearchSvg from "./GoogleSearchSVG.svelte";
</script>

<header>
    <div class="header-selection-container">
        <div class="header-selection-texts">
            <span class="header-selection-text">Gmail</span>
            <span class="header-selection-text">Images</span>
        </div>
        <div class="header-selection-images">
            <svelte:component this={GoogleAppsSvg} />
            <img src="/googleNameTag.png" alt="Google Name Tag"/>
        </div>
    </div>
</header>

<main>
    <div id="google-logo"><img src="/google.png" alt="google-logo"/></div>

    <form action="/search" method="GET" role="search">
        <div id="input-bar">
            <svelte:component this={GoogleSearchSvg} />
            <input type="text"/>
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

</main>


<footer>
    <div id="footer-language">
        <span>Israel</span>
    </div>
    <div id="about">
        <div>
            <span>About</span>
            <span>Advertising</span>
            <span>Business</span>
            <span>How Search works</span>
        </div>
        <div>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Settings</span>
        </div>
    </div>
</footer>
