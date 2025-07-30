import React, { useState, useRef } from 'react';
import { UploadIcon } from 'lucide-react';
export const MarkdownUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileContent, setFileContent] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      setFileContent(null);
    }
  };
  const handleUpload = () => {
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.onload = e => {
      const content = e.target?.result as string;
      setFileContent(content);
    };
    reader.readAsText(selectedFile);
  };
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };
  return <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Markdown File Uploader
      </h2>
      <div className="mb-6">
        <div onClick={triggerFileInput} className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors">
          <UploadIcon className="mx-auto h-12 w-12 text-gray-400 mb-3" />
          <p className="text-gray-600 mb-2">Click to select a Markdown file</p>
          <p className="text-xs text-gray-500">Only .md files are accepted</p>
          <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".md" className="hidden" />
        </div>
      </div>
      {selectedFile && <div className="mb-6">
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <div>
              <p className="font-medium text-gray-700">{selectedFile.name}</p>
              <p className="text-sm text-gray-500">
                {(selectedFile.size / 1024).toFixed(2)} KB
              </p>
            </div>
            <button onClick={handleUpload} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Upload
            </button>
          </div>
        </div>}
      {fileContent && <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            File Content:
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg overflow-auto max-h-96">
            <pre className="whitespace-pre-wrap text-sm text-gray-700">
              {fileContent}
            </pre>
          </div>
        </div>}
    </div>;
};