# Past-api

Class discord.js slash commands.

Has Classes for:
 * Slash Commands
 * User Context Menus
 * Message Context Menus

## Examples

New Slash Command Example:
```
const command = new Command({
    name: 'test',
    description: 'test',
    defaultPermission: true,
    type: 'CHAT_INPUT',
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
New Message Context Menu Example:
```
const messageContextMenu = new MessageContextMenu({
    name: 'test',
    defaultPermission: true,
    type: 'MESSAGE',
}, async (client, interaction) => {
    interaction.reply('done!')
});
```
New User Context Menu Example:
```
const messageContextMenu = new MessageContextMenu({
    name: 'test',
    defaultPermission: true,
    type: 'USER',
}, async (client, interaction) => {
    interaction.reply('done!')
});
```
 
 ## Registering and Handling Slash & Context Menu Commands
 Registering:
 ```
 ready({
    client: client,
    commands: [command, messageContextMenu, userContextMenu]
 })
 ```
 
 Handling: 
 TODO
