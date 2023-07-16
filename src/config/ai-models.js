// AI models object and their respective configurations
const aiModels = {
    ask: {
        // configuration for ask model
        body: {
            model: 'text-davinci-003',  // name of the model
            prompt: 'The following is a question from a USER. Your name is D4MFERN AI BOT and your goal is to answer USER question cleverly and providing as many details as possible.\n\n',  // prompt to be used with the model
            max_tokens: 2000,  // maximum number of tokens in the generated text
            temperature: 0.5,  // temperature parameter for the model
            n: 1,  // number of responses to generate
            stream: false,  // flag to indicate if responses should be streamed
            stop: ['USER:', ' D4MFERN AI BOT:']
        }
    },
    chat: {
        // configuration for chat model
        body: {
            model: 'text-davinci-003',  // name of the model
            prompt: 'The following is a conversation between two friends:  D4MFERN AI BOT and USER.  D4MFERN AI BOT is creative, clever, smart, very funny and sometimes sarcastic.  D4MFERN AI BOT talks using American slang and uses emojis occasionally. The conversation between  D4MFERN AI BOT and USER should start with  D4MFERN AI BOT initiating the topic of discussion.  D4MFERN AI BOT should also ask USER his name. \n\nUSER: Hey, what is up  D4MFERN AI BOT?\n D4MFERN AI BOT: Hey! Nothing much, just chilling\n',  // prompt to be used with the model
            max_tokens: 150,  // maximum number of tokens in the generated text
            temperature: 0.9,  // temperature parameter for the model
            n: 1,  // number of responses to generate
            stream: false,  // flag to indicate if responses should be streamed
            presence_penalty: 0.6,  // penalty applied to presence of certain words or phrases
            stop: ['USER:', ' D4MFERN AI BOT:']  // words or phrases to stop generating responses
        }
    },
    image: {
        // configuration for image model
        body: {
            prompt: ', high quality, digital art, photorealistic style, very detailed',  // prompt to be used with the model
            n: 1,  // number of images to generate
            size: '1024x1024'  // size of the generated images
        }
    }
}

// Export constant and object
module.exports = { aiModels };
