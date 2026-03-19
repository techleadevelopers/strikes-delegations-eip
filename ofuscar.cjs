const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');

// Lê o código minificado
const code = fs.readFileSync('./dist/sniper.min.js', 'utf8');

// Configuração nível "Missão Impossível"
const obfuscationResult = JavaScriptObfuscator.obfuscate(code, {
    compact: true,                    // Código em uma linha
    controlFlowFlattening: true,       // Embaralha fluxo de controle
    controlFlowFlatteningThreshold: 0.75,
    deadCodeInjection: true,           // Injeta código morto
    deadCodeInjectionThreshold: 0.4,
    debugProtection: true,             // Protege contra debug
    debugProtectionInterval: true,      // Força debug loop
    disableConsoleOutput: false,        // Mantém console (você precisa)
    identifierNamesGenerator: 'hexadecimal', // Nomes hexadecimais (_0x123abc)
    log: false,
    numbersToExpressions: true,         // Converte números em expressões
    renameGlobals: false,               // Não renomeia globais (process, require)
    rotateUnicodeArray: true,           // Embaralha strings
    selfDefending: true,                 // Código se autoprotege
    shuffleStringArray: true,            // Embaralha array de strings
    splitStrings: true,                  // Quebra strings em partes
    splitStringsChunkLength: 5,
    stringArray: true,                   // Ofusca strings
    stringArrayEncoding: ['rc4'],        // Codifica strings com RC4
    stringArrayIndexShift: true,
    stringArrayRotate: true,
    stringArrayShuffle: true,
    stringArrayWrappersCount: 5,
    stringArrayWrappersChainedCalls: true,
    stringArrayWrappersParametersMaxCount: 5,
    stringArrayWrappersType: 'function',
    stringArrayThreshold: 0.75,
    transformObjectKeys: true,           // Transforma objetos
    unicodeEscapeSequence: true          // Escapa caracteres Unicode
});

// Salva o código final
fs.writeFileSync('./dist/sniper_obfuscated.js', obfuscationResult.getObfuscatedCode());

console.log('✅ Código ofuscado com sucesso!');