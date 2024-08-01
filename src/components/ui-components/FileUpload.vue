<!-- src/components/FileUpload.vue ##ChatGPT-->
<template>
  <div>
    <h3>File Upload</h3>
    <input type="file" @change="handleFileUpload" />
    <button @click="uploadFile">Upload</button>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const selectedFile = ref(null);

const handleFileUpload = (event) => {
  selectedFile.value = event.target.files[0];
};

const uploadFile = async () => {
  if (!selectedFile.value) return;

  const formData = new FormData();
  formData.append('file', selectedFile.value);

  try {
    await axios.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    alert('File uploaded successfully!');
  } catch (error) {
    console.error('Error uploading file:', error);
    alert('File upload failed!');
  }
}
</script>

<style scoped>
h3 {
  color: #333;
}
input[type='file'] {
  margin-bottom: 10px;
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
