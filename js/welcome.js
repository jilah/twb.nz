// Add your code here

// Get production API keys from Upload.io
const upload = new Upload({ apiKey: "free" });

// Create input handler (see HTML).
const uploadFile = upload.createFileInputHandler({
  onBegin: () => {
    uploadButton.remove()
  },
  
  onProgress: ({ progress }) => {
    h1.innerHTML = `File uploading... ${progress}%`;
  },
  
  onUploaded: ({ fileUrl, fileId }) => {
    h1.innerHTML = `
        File uploaded:
        <br/>
        <br/>
        <a href="${fileUrl}" target="_blank">${fileUrl}</a>`
  },
  
  onError: (error) => {
    h1.innerHTML = `Please try another file:<br/><br/>${error.message}`
  }
});
