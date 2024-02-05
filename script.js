console.log("Hello, world!");


/*
    This section of code handles the logic
    regarding the initial button click/unclick
*/

const form = document.querySelector('.share-a-fact-btn');

form.addEventListener('click', () => {
    const form = document.querySelector('form');
    if(form.classList.contains('hidden'))
    {
        form.classList.remove('hidden');
        document.querySelector('button.share-a-fact-btn').textContent = "Close";
    }
    else    
    {
        form.classList.add('hidden');
        document.querySelector('button.share-a-fact-btn').textContent = "Share a fact";
    }
})

