view.searchBtn.addEventListener('click', async() => {
    const tag = view.tagInput.value;
    try {
        const rep = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.freetogame.com/api/filter?tag='+tag)}`);
        //const response  = await fetch("https://www.freetogame.com/api/filter?tag="+tag , {method: 'GET'});
        console.log(await rep.text());
    }catch (e) {
        console.log(e);
    }
})