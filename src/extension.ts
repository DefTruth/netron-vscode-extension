import * as vscode from 'vscode';
import { ModelVisualizer } from './modelVisualizer';

export function activate(context: vscode.ExtensionContext) {
	// Register our custom editor providers
	context.subscriptions.push(ModelVisualizer.register(context));
}
