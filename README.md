# netron-vscode-extension

A vscode extension for netron, support *.pdmodel, *.nb, *.onnx, *.pb, *.h5, *.tflite, *.pth, *.pt, *.mnn, *.tnnproto, *.param, etc. This code is based on [NetronInVSCode](https://github.com/chingweihsu0809/NetronInVSCode) but add more model format support, such as *.pdmodel, *.nb, *.mnn, *.param, *.tnnproto, etc.

## TODO 
- [x] add *.pdmodel, *.nb, *.mnn, *.param, *.tnnproto format support
- [ ] onnx-simplifier support
- [ ] paddle2onnx converter support
- [ ] x2paddle converter support
- [ ] MNN converter support
- [ ] Optimize some UI 

## Requirements

- `pip install netron`

## Usage

- Install `netron-vscode-extension` from VSCode marketplace.
- Click on a saved model to see the following.
![alt text](documentation/example.gif)

## Running the code

- Open this repo in VS Code
- `npm install`
- `F5` to start debugging

## Reference

- [netron](https://github.com/lutzroeder/netron)
- [node-python-bride](https://github.com/Submersible/node-python-bridge)
- [vscode-extension-samples](https://github.com/microsoft/vscode-extension-samples)
- [NetronInVSCode](https://github.com/chingweihsu0809/NetronInVSCode)