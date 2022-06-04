import { RunOptions } from "./Command";
import { LocalizationMap } from "discord-api-types/v10";
import { MessageApplicationCommandData, UserApplicationCommandData } from 'discord.js';
import { ApplicationCommandTypes } from "discord.js/typings/enums";

export type TMessageContextMenu = {
    run: RunOptions;
} & UserApplicationCommandData

export class UserContextMenu {
    name!: string;
    nameLocalizations?: LocalizationMap;
    defaultPermission?: boolean | undefined;
    type!: 'USER' | ApplicationCommandTypes.USER
    constructor(command: TMessageContextMenu) {
        this.name = command.name;
        this.nameLocalizations = command.nameLocalizations;
        this.defaultPermission = command.defaultPermission;
        this.type = command.type;
    }
}