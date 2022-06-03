import { Client, ApplicationCommandData, ApplicationCommandDataResolvable, Guild } from "discord.js";

export type readyOptions = {
    client: Client,
    commands: ApplicationCommandDataResolvable[],
    testServer?: string
}

export async function ready(readyOptions: readyOptions): Promise<void> {
    readyOptions?.client.on('ready', () => {
        console.log(`Logging in and registering commands for ${readyOptions?.client?.user?.tag}`)

        if (!readyOptions?.client?.user?.bot) {
            console.log('You can\'t register commands for a user!')
            return;
        }

        readyOptions?.client?.application?.commands.set(readyOptions?.commands, readyOptions?.testServer?).then(c => console.log('Successfuly registered commands.')).catch(err => console.log(err))
    })
}   