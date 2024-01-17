import Queue from 'bull'

export const sourceFilesProcessQueue = new Queue('source-files-process-queue')
