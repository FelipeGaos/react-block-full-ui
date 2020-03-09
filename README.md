

# PDF Simulator

# react-pdf-simulator
[![dependencies Status](https://david-dm.org/gregnb/mui-datatables/status.svg)](https://david-dm.org/jsnavarroc/react-pdf-simulator)
[![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&type=6&v=2.2.14&x2=0)](https://badge.fury.io/js/react-pdf-simulator)

![alt text](https://i.ibb.co/hYrpHK3/image.png)
## Install
    
    yarn add react-pdf-simulator

## Demo

[![Edit react-to-print](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-pdf-simulator-3v50o)
## Usage

For a simple table:

```js


    import React from 'react';
    import PDFsimulator from 'react-pdf-simulator';

    const index = () => {
        return (
            <PDFsimulator>
                <h1>¡¡Hola Mundo!!</h1>
                <h2>Coloca todo tu codigo HTML o JSX aquí</h2>  
            </PDFsimulator>
        );
    };

    export default index;
```

Or customize buttons:

place buttons:

```js
import CloudDownload from "@material-ui/icons/CloudDownload";
import ErrorIcon from "@material-ui/icons/Close";
import React from "react";
const renderCloudDownload = () => <CloudDownload />;
const renderErrorIcon = () => <ErrorIcon/>;
const fun1 = event => {
  console.log("event",event);
};

const fun2 = event => {
  console.log("event", event);
};
export const CustomisationButtons = [
  {
    icon: renderCloudDownload,
    functionButton: [fun1, fun2],
    description: "imprimir"
  },
  {
    icon: renderErrorIcon,
    functionButton: [fun1],
    description: "cerrar"
  }
];

```
Or customize view point:

```js
export const CustomisationViewpoint = {
  stylesContainerView: {
    backgroundColor: "#528059",
    width: "120vh",
    height: "89vh"
  },
  zoomDefault: {
    zoomNumInit: 0.8
  },
  buttonContent: {
    marginTop: "30vh" /* Edit height button */ || /* Se edita altura de botones */
  },
  styleContent: {
    display: "block",
    fontFamily: "Courier New",
    textAlign: "justify",
    overflow: "hidden",
    marginLeft: "6%",
    marginRight: "11%"
  }
};

```

## License
The files included in this repository are licensed under the MIT license.

## Thanks
Thank you to [IAS](https://www.ias.com.co/en_US/) for providing the infrastructure that allows me to test in real browsers.





