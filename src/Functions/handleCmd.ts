import { ApplicationCommandData, BaseCommandInteraction, Client, CommandInteraction, Interaction } from "discord.js";
import { Command } from "src/Interactions/Command";

export async function handleCmd(client: Client, command: Command[]): Promise<void> {
    client.on('interactionCreate', async (interaction: Interaction) => {
        if(interaction.isCommand()) {
            await handleSlashCommand(client, interaction, command);
        }
    })
}

export async function handleSlashCommand(client: Client, interaction: CommandInteraction, commands: Command[]): Promise<void> {
    const slashCommand = commands.find(c => c.name === interaction.commandName);

    slashCommand?.run(client, interaction);
}