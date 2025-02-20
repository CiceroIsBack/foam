import { commands, ExtensionContext } from 'vscode';
import { createTemplate } from '../../services/templates';

export default async function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand('loam-vscode.create-new-template', createTemplate)
  );
}
