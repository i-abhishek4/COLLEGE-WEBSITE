let loadFiles = () => {
    const folderInput = document.getElementById('folderInput');
    const files = folderInput.files;

    if (files.length === 0) {
        alert("Please select a folder first.");
        return;
    }

    const fileListUl = document.getElementById('fileList');
    fileListUl.innerHTML = ''; 

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = file.webkitRelativePath.split('/').pop(); 
        link.href = '#'; 
        link.onclick = () => displayFileContent(file); 
        listItem.appendChild(link);
        fileListUl.appendChild(listItem);
    }
}

let displayFileContent = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
        const fileContentDiv = document.getElementById('fileContent');
        fileContentDiv.innerHTML = '<pre>' + reader.result + '</pre>'; 
    };
    reader.readAsText(file);
    
    const selectedFileNameDiv = document.getElementById('selectedFileName');
    selectedFileNameDiv.textContent = "Selected File: " + file.webkitRelativePath.split('/').pop(); 
}