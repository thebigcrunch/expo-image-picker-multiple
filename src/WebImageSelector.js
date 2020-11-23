//
// Uses Expos standard web view rendering for selecting images on the web
// Should really re-write this ourselves.
//

import React from 'react';
import { useDropzone } from 'react-dropzone';

function MyDropzone() {
    const onDrop = React.useCallback((acceptedFiles) => {
        // Do something with the files
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
            )}
        </div>
    );
}

export const renderWebView = () => {
    console.log('REDERING THE DIV WEB WORK FLOW!');
    return MyDropzone();
};
