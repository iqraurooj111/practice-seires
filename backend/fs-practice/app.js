const fs = require('fs/promises');
const path = require('path');

async function runFileSystemPractice() {
    try {
        console.log('--- File System Practice Started ---');

        // 1. Directory Path Define Karna
        const folderPath = path.join(__dirname, 'my-notes');
        const filePath = path.join(folderPath, 'demo.txt');

        // 2. Folder Banayein (mkdir)
        await fs.mkdir(folderPath, { recursive: true });
        console.log('1. Folder "my-notes" successfully ban gaya.');

        // 3. File Banayein Aur Content Likhein (writeFile)
        const initialText = 'Hello! Ye pehli line hai file mein.';
        await fs.writeFile(filePath, initialText, 'utf-8');
        console.log('2. File "demo.txt" create ho gayi aur data write ho gaya.');

        // 4. File Mein Aur Data Add Karein (appendFile)
        const newText = '\nYe doosri line hai jo append/add ki gayi hai.';
        await fs.appendFile(filePath, newText, 'utf-8');
        console.log('3. Naya data file ke aage add (append) ho gaya.');

        // 5. File Ka Content Read Karein (readFile)
        const fileContent = await fs.readFile(filePath, 'utf-8');
        console.log('\n--- File ka Content Dekhein ---');
        console.log(fileContent);
        console.log('-------------------------------\n');

        // 6. Folder Ke Andar Ki Files Ki List Dekhein (readdir)
        const filesList = await fs.readdir(folderPath);
        console.log('4. Folder ke andar files list:', filesList);

        // 7. Cleanup Operation (File delete karna)
        await fs.unlink(filePath);
        console.log('5. Testing complete! "demo.txt" file delete kar di gayi.');

    } catch (error) {
        console.error('Error aa gaya:', error.message);
    }
}

// Function Call
runFileSystemPractice();