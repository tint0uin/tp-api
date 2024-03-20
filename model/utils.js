function format(tag) {
    return tag.replaceAll(' ', '.');
}

async function transform(reponse) {
    let obj = await reponse.json();
    return JSON.parse(obj.contents);
}