<template>
  <div class="validator-container">
     <div v-if="message" class="message-display">
        <button class="back" @click="clearMessage">BACK</button>
        <div class="response">{{ message }}</div>
      </div>
    <div v-else>
      <div class="title">
        <div class="title-text">
          <span>Deal Criteria Validator</span>
          <span title="View system prompt">
            <Tooltip :size="11" :strokeWidth="2" className="tool-tip" @click="showSysPrompt"/>
          </span>
        </div>
      </div>
      <div class="deals-container">
        <div class="deal-wrap" v-for="deal in deals" :key="deal">
          <Deal :deal="deal"/>
        </div>
        <CustomDeal/>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { CLAUDE_SYSTEM_PROMPT, DEALS } from '~/data';

const deals = DEALS
const message = ref<string>('');

// Function to set a message
const setMessage = (msg: string) => {
  message.value = msg;
};

// Function to clear the message
const clearMessage = () => {
  message.value = '';
};

// Provide functions to child components
provide('setMessage', setMessage);
provide('clearMessage', clearMessage);

const showSysPrompt = () => {
  setMessage("SYSTEM PROMPT:" + CLAUDE_SYSTEM_PROMPT)
}
</script>

<style scoped lang="scss">
.validator-container {
    flex: 1;
    height: 100%;
    background-color: $color-primary;
    border: 2px solid;
    padding: 8px;
    overflow: hidden;

    .title {
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 8px;

      .title-text {
        position: relative;
        display: flex;
        gap: 2px;

        .tool-tip {
          cursor: pointer;
          &:hover {
            color: white;
          }
        }
      }
    }

    .message-display {
      white-space: pre-wrap;
      overflow-y: auto;
      height: 100%;

      .back {
        border: 2px solid;
        cursor: pointer;
        background-color: $color-secondary;
        margin-bottom: 8px;
        &:hover {
            color: #fff;
        }
      }

      .response {
        padding: 8px;
        background-color: $color-secondary;
        border: 2px solid;
      }
    }

    .deals-container {
      display: flex;
      gap: 8px;
      
      .deal-wrap {
        width: 33%;
        height: 100%;
      }
    }
}

</style>
