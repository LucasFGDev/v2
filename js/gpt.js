import OpenAI from 'openai';

const input = document.querySelector("#campoUser")
const textUser = document.querySelector("#comand")
const element = document.querySelector("#form")

const openai = new OpenAI({
  apiKey: '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', // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true 
});

element.addEventListener("submit", (e) => {

    var valueUser = input.value;
    
    e.preventDefault();

    textUser.innerHTML +=  `<div class='content-user' id='textUser'><p>` + valueUser +  `</p></div>`

    async function main() {
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: valueUser }],
        model: 'gpt-3.5-turbo',
        temperature: 0.5,
      });

      textUser.innerHTML +=  `<div class='content-text-gpt' id='textgpt'><p>`+ chatCompletion.choices[0].message.content +`</p></div>`

      }
    
    main();


});


