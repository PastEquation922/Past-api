# Past-api

Class discord.js slash commands.

Has Classes for:
 * Slash Commands
 * User Context Menus
 * Message Context Menus

New Slash Command Example:
```
const command = new Command({
    name: 'test',
    description: 'test',
    defaultPermission: true,
    options: [
        {
            name: 'test',
            description: 'test',
            type: 'STRING',
            required: true
        }
    ]
}, async (client, interaction) => {
    interaction.reply('test');
})
```

Register Slash Command Example: 
```
TODO
```
 
