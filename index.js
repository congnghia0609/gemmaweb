import {FilesetResolver, LlmInference} from 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai';

const input = document.getElementById('input');
const output = document.getElementById('output');
const submit = document.getElementById('submit');

const modelFileName = 'gemma-2b-it-gpu-int4.bin'; /* Update the file name */

/**
 * Display newly generated partial results to the output text box.
 */
function displayPartialResults(partialResults, complete) {
  output.textContent += partialResults;

  if (complete) {
    if (!output.textContent) {
      output.textContent = 'Result is empty';
    }
    submit.disabled = false;
  }
}

/**
 * Main function to run LLM Inference.
 */
async function runDemo() {
  /**
  // Ngày 19/03/2024 tasks-genai & wasm version 0.10.12
  // https://developers.google.com/mediapipe/solutions/genai/llm_inference/web_js#create_the_task
  const genai = await FilesetResolver.forGenAiTasks(
    // path/to/wasm/root
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai@latest/wasm"
  );
  llmInference = await LlmInference.createFromOptions(genai, {
    baseOptions: {
      modelAssetPath: '/assets/gemma-2b-it-gpu-int4.bin'
    },
    maxTokens: 1000,
    topK: 40,
    temperature: 0.8,
    randomSeed: 101
  });
   */
  const genaiFileset = await FilesetResolver.forGenAiTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai/wasm');
  let llmInference;

  submit.onclick = () => {
    output.textContent = '';
    submit.disabled = true;
    llmInference.generateResponse(input.value, displayPartialResults);
  };

  submit.value = 'Loading the model...'
  LlmInference
      .createFromModelPath(genaiFileset, modelFileName)
      .then(llm => {
        llmInference = llm;
        submit.disabled = false;
        submit.value = 'Get Response'
      }).catch(() =>{
        alert('Failed to initialize the task.');
      });
}

runDemo();
