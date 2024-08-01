<!-- src/components/Chat.vue ##ChatGPT-->
<template>
  <div>
    <h3>Chat</h3>
    <div class="chat-box">
      <div v-for="(message, index) in messages" :key="index" class="message">
        <strong>{{ message.username }}:</strong> {{ message.text }}
      </div>
    </div>
    <input
      type="text"
      v-model="messageText"
      placeholder="Type a message..."
      @keyup.enter="sendMessage"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { io } from 'socket.io-client';
import { useStore } from 'vuex';

const store = useStore();
const socket = io('http://localhost:5000');

const messages = ref([]);
const messageText = ref('');

const sendMessage = () => {
  if (messageText.value.trim()) {
    socket.emit('chatMessage', {
      username: store.state.user.username,
      text: messageText.value,
    });
    messageText.value = '';
  }
};

onMounted(() => {
  socket.on('chatMessage', (message) => {
    messages.value.push(message);
  });
});

onUnmounted(() => {
  socket.disconnect();
});
</script>

<style scoped>
h3 {
  color: #333;
}
.chat-box {
  border: 1px solid #ddd;
  padding: 10px;
  max-height: 200px;
  overflow-y: scroll;
  margin-bottom: 10px;
}
.message {
  margin-bottom: 5px;
}
input[type='text'] {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
</style>
