# gemmaweb
GemmaWeb là một trình diễn của mô hình ngôn ngữ lớn GemmaGPT trên Web.  
GemmaGPT là mô hình ngôn ngữ lớn sử dụng những kỹ thuật tương tự như Gemini nhưng nhẹ hơn.  
Source code reference at [MediaPipe LLM GitHub](https://github.com/googlesamples/mediapipe/tree/main/examples/llm_inference/js).  

## Prerequisites

* A browser with WebGPU support (eg. Chrome on Ubuntu, macOS or Windows).

## Running the demo

Follow the following instructions to run the sample on your device:
1. Make a folder for the task, named as `gemmaweb`, and copy the [index.html](https://github.com/googlesamples/mediapipe/blob/main/examples/llm_inference/js/index.html) and [index.js](https://github.com/googlesamples/mediapipe/blob/main/examples/llm_inference/js/index.js) files into your `gemmaweb` folder.
2. Download [Gemma 2B](https://www.kaggle.com/models/google/gemma/frameworks/tfLite/variations/gemma-2b-it-gpu-int4) (TensorFlow Lite 2b-it-gpu-int4 or 2b-it-gpu-int8) or convert an external LLM (Phi-2, Falcon, or StableLM) following the [guide](https://developers.google.com/mediapipe/solutions/genai/llm_inference/web_js#convert-model) (only gpu backend is currently supported), into the `gemmaweb` folder.
3. In your `index.js` file, update [`modelFileName`](https://github.com/googlesamples/mediapipe/blob/main/examples/llm_inference/js/index.js#L23) with your model file's name.
4. Run `python3 -m http.server 8888` under the `gemmaweb` folder to host the three files (or `python -m SimpleHTTPServer 8888` for older python versions).
5. Open `localhost:8888` in Chrome. Then the button on the webpage will be enabled when the task is ready (~10 seconds).

```bash
# Run Chrome Version 122.0.6261.94 (Official Build) (64-bit) with WebGPU on Ubuntu 20.04
google-chrome --user-data-dir="/var/tmp/ChromeLLM" --enable-unsafe-webgpu --enable-features=Vulkan
```

