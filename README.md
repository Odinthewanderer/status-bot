# Mumblerines Squad Server Status Bot

## REQUIREMENTS
Node version 7+

## INSTALLATION
To begin, clone the repository from [HERE!](https://github.com/Odinthewanderer/status-bot.git)

Issue the command:

`npm install`

This will install all required dependencies.

## CONFIGURATOIN
`mv lib/config.json.example lib/config.json`

Edit this file to include your bot token, client id, discord id, and desired prefix (default prefix is !).

## STARTUP

`node bot.js`

## KNOWN BUGS

1. There is a small issue that only occurs on the very first startup. You will encounter an error. Just Ctrl+C to kill it and restart the bot. You will never see this error again. [ISSUE 1](https://github.com/Odinthewanderer/status-bot/issues/1)
2. Occassionally the images will take longer than expected and will paste an incomplete image into the chat. Attempt to rerun the !status command again. [ISSUE 2](https://github.com/Odinthewanderer/status-bot/issues/2)
