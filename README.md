# Lecture notes

Lecture Notes, based on Whisper and ChatGPT, easily converts audio into text for notes. Seamless integration with Notion makes it an indispensable assistant for streamlined note taking and organised documentation.

![](https://github.com/yasuss/lecture-notes/blob/main/public/assets/example.gif)


## Installation 

You need to preinstall npm (node.js), webpack-dev-server, and after this use this script:

```bash
npm i
```

## Usage

Add env paramas in .env file based on .env.example.

OPEN_AI_SECRET - it's your integration key in openai
NOTION_API_KEY - it's your integration key in Notion
NOTION_DATABASE_ID - it's an id of page in Notion, because you can't create a new page without parent page by API

```
OPEN_AI_SECRET=<YOUR_API_KEY>
NOTION_API_KEY=<YOUR_API_KEY>
NOTION_DATABASE_ID=<YOUR_NOTION_DATABASE_ID>
```

After adding all keys, run command:

```
npm run start
```

## Technologies

- React, Typescript
- Material UI, Emotion
- API Whisper and ChatGPT models
- Webpack, Babel
- FSD architecture 
