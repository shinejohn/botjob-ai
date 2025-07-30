import React, { useEffect, useState } from 'react';
import { Upload, File, Trash2, Link, MessageSquare, FileText, Plus, Edit, HelpCircle } from 'lucide-react';
interface TrainingKnowledgeProps {
  config: any;
  updateConfig: (data: any) => void;
}
export const TrainingKnowledge: React.FC<TrainingKnowledgeProps> = ({
  config,
  updateConfig
}) => {
  const [uploadedDocuments, setUploadedDocuments] = useState(config.uploadedDocuments || []);
  const [faqs, setFaqs] = useState(config.faqs || []);
  const [responseTemplates, setResponseTemplates] = useState(config.responseTemplates || []);
  const [procedures, setProcedures] = useState(config.procedures || []);
  const [activeTab, setActiveTab] = useState('documents');
  // Update parent component when data changes
  useEffect(() => {
    updateConfig({
      uploadedDocuments,
      faqs,
      responseTemplates,
      procedures
    });
  }, [uploadedDocuments, faqs, responseTemplates, procedures]);
  const handleDocumentUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    // In a real app, this would upload files to a server
    // For demo purposes, we'll just add them to the list
    const newDocuments = Array.from(files).map(file => ({
      id: `doc-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: file.name,
      type: file.type,
      size: file.size,
      uploadDate: new Date().toISOString()
    }));
    setUploadedDocuments([...uploadedDocuments, ...newDocuments]);
  };
  const removeDocument = (documentId: string) => {
    setUploadedDocuments(uploadedDocuments.filter(doc => doc.id !== documentId));
  };
  const addFaq = () => {
    setFaqs([...faqs, {
      id: `faq-${Date.now()}`,
      question: '',
      answer: ''
    }]);
  };
  const updateFaq = (id: string, field: 'question' | 'answer', value: string) => {
    setFaqs(faqs.map(faq => faq.id === id ? {
      ...faq,
      [field]: value
    } : faq));
  };
  const removeFaq = (id: string) => {
    setFaqs(faqs.filter(faq => faq.id !== id));
  };
  const addTemplate = () => {
    setResponseTemplates([...responseTemplates, {
      id: `template-${Date.now()}`,
      name: '',
      content: '',
      useCase: ''
    }]);
  };
  const updateTemplate = (id: string, field: string, value: string) => {
    setResponseTemplates(responseTemplates.map(template => template.id === id ? {
      ...template,
      [field]: value
    } : template));
  };
  const removeTemplate = (id: string) => {
    setResponseTemplates(responseTemplates.filter(template => template.id !== id));
  };
  const addProcedure = () => {
    setProcedures([...procedures, {
      id: `procedure-${Date.now()}`,
      name: '',
      steps: ['']
    }]);
  };
  const updateProcedureName = (id: string, name: string) => {
    setProcedures(procedures.map(procedure => procedure.id === id ? {
      ...procedure,
      name
    } : procedure));
  };
  const updateProcedureStep = (procedureId: string, stepIndex: number, value: string) => {
    setProcedures(procedures.map(procedure => {
      if (procedure.id !== procedureId) return procedure;
      const newSteps = [...procedure.steps];
      newSteps[stepIndex] = value;
      return {
        ...procedure,
        steps: newSteps
      };
    }));
  };
  const addProcedureStep = (procedureId: string) => {
    setProcedures(procedures.map(procedure => {
      if (procedure.id !== procedureId) return procedure;
      return {
        ...procedure,
        steps: [...procedure.steps, '']
      };
    }));
  };
  const removeProcedureStep = (procedureId: string, stepIndex: number) => {
    setProcedures(procedures.map(procedure => {
      if (procedure.id !== procedureId) return procedure;
      if (procedure.steps.length <= 1) return procedure;
      const newSteps = [...procedure.steps];
      newSteps.splice(stepIndex, 1);
      return {
        ...procedure,
        steps: newSteps
      };
    }));
  };
  const removeProcedure = (id: string) => {
    setProcedures(procedures.filter(procedure => procedure.id !== id));
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case 'documents':
        return <div>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium text-gray-900">
                  Document Upload
                </h3>
                <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center" onClick={() => document.getElementById('file-upload')?.click()}>
                  <Upload className="h-4 w-4 mr-1" />
                  Upload Files
                </button>
                <input id="file-upload" type="file" multiple className="hidden" onChange={handleDocumentUpload} accept=".pdf,.doc,.docx,.txt,.csv,.xlsx" />
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <div className="flex flex-col items-center">
                  <FileText className="h-10 w-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-1">
                    Drag and drop files here, or click to browse
                  </p>
                  <p className="text-xs text-gray-400">
                    Supported formats: PDF, Word, TXT, CSV, Excel
                  </p>
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm" onClick={() => document.getElementById('file-upload')?.click()}>
                  Select Files
                </button>
              </div>
            </div>
            {uploadedDocuments.length > 0 && <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Uploaded Documents
                </h3>
                <div className="space-y-3">
                  {uploadedDocuments.map(doc => <div key={doc.id} className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-md">
                      <div className="flex items-center">
                        <File className="h-5 w-5 text-blue-500 mr-2" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {doc.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formatFileSize(doc.size)} • Uploaded{' '}
                            {new Date(doc.uploadDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <button onClick={() => removeDocument(doc.id)} className="text-gray-400 hover:text-red-500">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>)}
                </div>
              </div>}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium text-gray-900">
                  Add Website Content
                </h3>
                <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                  <Link className="h-4 w-4 mr-1" />
                  Add URL
                </button>
              </div>
              <div className="flex">
                <input type="url" placeholder="Enter website URL (e.g., https://www.yourcompany.com/faq)" className="flex-1 p-3 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500" />
                <button className="px-4 py-3 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                  Import
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                We'll scan the webpage and extract relevant information for your
                agent.
              </p>
            </div>
          </div>;
      case 'faqs':
        return <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Frequently Asked Questions
              </h3>
              <button onClick={addFaq} className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm flex items-center">
                <Plus className="h-4 w-4 mr-1" />
                Add FAQ
              </button>
            </div>
            {faqs.length === 0 ? <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                <MessageSquare className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">
                  No FAQs added yet. Add common questions your customers ask.
                </p>
                <button onClick={addFaq} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                  Add Your First FAQ
                </button>
              </div> : <div className="space-y-6">
                {faqs.map((faq, index) => <div key={faq.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-medium text-gray-700">
                        FAQ #{index + 1}
                      </h4>
                      <button onClick={() => removeFaq(faq.id)} className="text-gray-400 hover:text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">
                          Question
                        </label>
                        <input type="text" value={faq.question} onChange={e => updateFaq(faq.id, 'question', e.target.value)} placeholder="E.g., What are your business hours?" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">
                          Answer
                        </label>
                        <textarea value={faq.answer} onChange={e => updateFaq(faq.id, 'answer', e.target.value)} rows={3} placeholder="E.g., Our business hours are Monday to Friday, 9 AM to 5 PM Eastern Time." className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                    </div>
                  </div>)}
              </div>}
            {faqs.length > 0 && <button onClick={addFaq} className="mt-4 w-full py-2 border border-dashed border-gray-300 rounded-md text-gray-500 hover:text-gray-700 hover:border-gray-400 flex items-center justify-center">
                <Plus className="h-4 w-4 mr-1" />
                Add Another FAQ
              </button>}
          </div>;
      case 'templates':
        return <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Response Templates
              </h3>
              <button onClick={addTemplate} className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm flex items-center">
                <Plus className="h-4 w-4 mr-1" />
                Add Template
              </button>
            </div>
            {responseTemplates.length === 0 ? <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                <MessageSquare className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">
                  No response templates added yet. Templates help your agent
                  respond consistently.
                </p>
                <button onClick={addTemplate} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                  Add Your First Template
                </button>
              </div> : <div className="space-y-6">
                {responseTemplates.map((template, index) => <div key={template.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-medium text-gray-700">
                        Template #{index + 1}
                      </h4>
                      <button onClick={() => removeTemplate(template.id)} className="text-gray-400 hover:text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">
                          Template Name
                        </label>
                        <input type="text" value={template.name} onChange={e => updateTemplate(template.id, 'name', e.target.value)} placeholder="E.g., Greeting" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">
                          Use Case
                        </label>
                        <input type="text" value={template.useCase} onChange={e => updateTemplate(template.id, 'useCase', e.target.value)} placeholder="E.g., Initial customer greeting" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">
                          Content
                        </label>
                        <textarea value={template.content} onChange={e => updateTemplate(template.id, 'content', e.target.value)} rows={4} placeholder="E.g., Hello! Thank you for contacting [Company Name]. My name is [Agent Name] and I'm here to assist you today. How may I help you?" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                        <p className="text-xs text-gray-400 mt-1">
                          Use [Company Name], [Agent Name], etc. as placeholders
                          that will be automatically filled.
                        </p>
                      </div>
                    </div>
                  </div>)}
              </div>}
            {responseTemplates.length > 0 && <button onClick={addTemplate} className="mt-4 w-full py-2 border border-dashed border-gray-300 rounded-md text-gray-500 hover:text-gray-700 hover:border-gray-400 flex items-center justify-center">
                <Plus className="h-4 w-4 mr-1" />
                Add Another Template
              </button>}
          </div>;
      case 'procedures':
        return <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Standard Operating Procedures
                </h3>
                <p className="text-sm text-gray-500">
                  Define step-by-step processes for your agent to follow
                </p>
              </div>
              <button onClick={addProcedure} className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm flex items-center">
                <Plus className="h-4 w-4 mr-1" />
                Add Procedure
              </button>
            </div>
            {procedures.length === 0 ? <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                <FileText className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">
                  No procedures added yet. Procedures help your agent handle
                  complex tasks consistently.
                </p>
                <button onClick={addProcedure} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                  Add Your First Procedure
                </button>
              </div> : <div className="space-y-8">
                {procedures.map((procedure, index) => <div key={procedure.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <h4 className="text-md font-medium text-gray-800">
                          {procedure.name || `Procedure #${index + 1}`}
                        </h4>
                        <button className="ml-2 text-gray-400 hover:text-blue-600">
                          <Edit className="h-4 w-4" />
                        </button>
                      </div>
                      <button onClick={() => removeProcedure(procedure.id)} className="text-gray-400 hover:text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mb-4">
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        Procedure Name
                      </label>
                      <input type="text" value={procedure.name} onChange={e => updateProcedureName(procedure.id, e.target.value)} placeholder="E.g., Handling Refund Requests" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-2">
                        Steps
                      </label>
                      <div className="space-y-3">
                        {procedure.steps.map((step, stepIndex) => <div key={stepIndex} className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-medium mr-3">
                              {stepIndex + 1}
                            </div>
                            <div className="flex-1">
                              <textarea value={step} onChange={e => updateProcedureStep(procedure.id, stepIndex, e.target.value)} rows={2} placeholder={`Step ${stepIndex + 1} description`} className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <button onClick={() => removeProcedureStep(procedure.id, stepIndex)} className="flex-shrink-0 ml-2 mt-2 text-gray-400 hover:text-red-500" disabled={procedure.steps.length <= 1}>
                              <Trash2 className={`h-4 w-4 ${procedure.steps.length <= 1 ? 'opacity-30' : ''}`} />
                            </button>
                          </div>)}
                      </div>
                      <button onClick={() => addProcedureStep(procedure.id)} className="mt-3 px-3 py-1 text-sm text-blue-600 hover:text-blue-800 flex items-center">
                        <Plus className="h-4 w-4 mr-1" />
                        Add Step
                      </button>
                    </div>
                  </div>)}
              </div>}
            {procedures.length > 0 && <button onClick={addProcedure} className="mt-4 w-full py-2 border border-dashed border-gray-300 rounded-md text-gray-500 hover:text-gray-700 hover:border-gray-400 flex items-center justify-center">
                <Plus className="h-4 w-4 mr-1" />
                Add Another Procedure
              </button>}
          </div>;
      default:
        return null;
    }
  };
  // Helper function to format file size
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';else return (bytes / 1048576).toFixed(1) + ' MB';
  };
  return <div>
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">
            Train Your Agent
          </h3>
          <button className="text-gray-400 hover:text-gray-600">
            <HelpCircle className="h-5 w-5" />
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Provide information and knowledge to help your agent better understand
          your business.
        </p>
      </div>
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-6">
          <button onClick={() => setActiveTab('documents')} className={`py-3 border-b-2 font-medium text-sm ${activeTab === 'documents' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Documents
          </button>
          <button onClick={() => setActiveTab('faqs')} className={`py-3 border-b-2 font-medium text-sm ${activeTab === 'faqs' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            FAQs
          </button>
          <button onClick={() => setActiveTab('templates')} className={`py-3 border-b-2 font-medium text-sm ${activeTab === 'templates' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Response Templates
          </button>
          <button onClick={() => setActiveTab('procedures')} className={`py-3 border-b-2 font-medium text-sm ${activeTab === 'procedures' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Procedures
          </button>
        </nav>
      </div>
      {/* Tab Content */}
      {renderTabContent()}
    </div>;
};