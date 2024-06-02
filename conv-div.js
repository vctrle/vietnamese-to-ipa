function applyConversion(input, rules) { let result = ''; let i = 0; while (i < input.length) { let matched = false; for (let length = Math.min(Object.keys(rules).reduce((max, key) => Math.max(max, key.length), 0), input.length - i); length > 0; length--) { let substring = input.slice(i, i + length); if (substring in rules) { result += rules[substring]; i += length; matched = true; break; } } if (!matched) { result += input[i]; i++; } } return result; }
function updateOutput() { const inputText = document.getElementById('inputArea').value; const inputLines = inputText.split('\n'); const outputLines = inputLines.map(line => { const inputWords = line.split(' '); const outputWords = inputWords.map(word => { let convertedWord = word; for (const rules of conversionRulesList) { convertedWord = applyConversion(convertedWord, rules); } return convertedWord; }); return outputWords.join(' '); }); document.getElementById('outputArea').innerHTML = outputLines.join('<br>'); }
