import React, { useState, useRef } from "react";

const ClaimPanel = ({ onClose, questionNo, userName = "Vinay Vyas" }) => {
  const [editorContent, setEditorContent] = useState("");
  const [attachments, setAttachments] = useState([]);
  const textareaRef = useRef(null);

  const handleSendReport = () => {
    const reportData = {
      user: userName,
      questionNo,
      content: editorContent,
      attachments,
    };
    console.log("Report Data:", reportData);
    alert("Report sent successfully!");
    onClose();
  };

  const handleFileAttachment = (event, type) => {
    const files = Array.from(event.target.files);
    setAttachments([
      ...attachments,
      ...files.map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type,
        size: file.size,
      })),
    ]);
  };

  const handleRemoveAttachment = (id) => {
    setAttachments(attachments.filter((file) => file.id !== id));
  };

  const formatText = (action) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = editorContent.substring(start, end);

    let formattedText = "";
    let newCursorPosition = end;

    switch (action) {
      case "bold":
        formattedText = `**${selectedText}**`;
        newCursorPosition = start + formattedText.length;
        break;
      case "italic":
        formattedText = `_${selectedText}_`;
        newCursorPosition = start + formattedText.length;
        break;
      case "underline":
        formattedText = `__${selectedText}__`;
        newCursorPosition = start + formattedText.length;
        break;
      case "strikethrough":
        formattedText = `~~${selectedText}~~`;
        newCursorPosition = start + formattedText.length;
        break;
      case "hashtag":
        formattedText = `#${selectedText}`;
        newCursorPosition = start + formattedText.length;
        break;
      case "copy":
        navigator.clipboard.writeText(selectedText);
        return;
      case "cut":
        navigator.clipboard.writeText(selectedText);
        formattedText = "";
        break;
      case "paste":
        navigator.clipboard.readText().then((clipText) => {
          const newText =
            editorContent.substring(0, start) +
            clipText +
            editorContent.substring(end);
          setEditorContent(newText);
          textarea.focus();
          textarea.setSelectionRange(
            start + clipText.length,
            start + clipText.length
          );
        });
        return;
      case "undo":
        textarea.undo();
        return;
      case "redo":
        textarea.redo();
        return;
      default:
        return;
    }

    const newText =
      editorContent.substring(0, start) +
      formattedText +
      editorContent.substring(end);
    setEditorContent(newText);

    // Set cursor position after formatting
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(newCursorPosition, newCursorPosition);
    }, 0);
  };

  const textEditingOptions = [
    // { icon: "ri-bold", action: "bold", title: "Bold" },
    // { icon: "ri-italic", action: "italic", title: "Italic" },
    // { icon: "ri-underline", action: "underline", title: "Underline" },
    // { icon: "ri-strikethrough", action: "strikethrough", title: "Strikethrough" },
    // { icon: "ri-file-copy-line", action: "copy", title: "Copy" },
    // { icon: "ri-clipboard-line", action: "paste", title: "Paste" },
    // { icon: "ri-scissors-cut-line", action: "cut", title: "Cut" },
    // { icon: "ri-arrow-go-back-line", action: "undo", title: "Undo" },
    // { icon: "ri-arrow-go-forward-line", action: "redo", title: "Redo" },
    // { icon: "ri-hashtag", action: "hashtag", title: "Add Hashtag" },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed bg-[#d2d2d2] opacity-50 inset-0 backdrop-blur-sm"></div>

      <div className="relative w-[700px] bg-white rounded-xl p-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-zinc-800 text-2xl font-semibold">
            Claim to Panel
          </h1>
          <i
            onClick={onClose}
            className="text-2xl ri-close-large-line hover:cursor-pointer"
          ></i>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-zinc-300 rounded-full overflow-hidden">
            <img
              src="https://placehold.co/48x48"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-zinc-800">{userName}</h3>
            <p className="text-sm text-zinc-600">Question {questionNo}</p>
          </div>
        </div>

        {/* Text Editor Area */}
        <div className="mb-4">
          <textarea
            ref={textareaRef}
            className="w-full h-40 p-4 border-2 border-gray-200 rounded-lg resize-none focus:outline-none focus:border-blue-500"
            placeholder="Write your message here..."
            value={editorContent}
            onChange={(e) => setEditorContent(e.target.value)}
          ></textarea>
        </div>

        {/* Editing Options */}

        <div className="flex items-center gap-3 mb-4 p-2 border-t border-b">
          {textEditingOptions.map((option) => (
            <button
              key={option.title}
              className="p-2 hover:bg-gray-100 rounded"
              title={option.title}
              onClick={() => formatText(option.action)}
            >
              <i className={option.icon}></i>
            </button>
          ))}

          {/* File Attachments */}
          <label className="p-2 hover:bg-gray-100 rounded cursor-pointer">
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) => handleFileAttachment(e, "pdf")}
            />
            <i className="ri-file-pdf-line"></i>
          </label>

          <label className="p-2 hover:bg-gray-100 rounded cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileAttachment(e, "image")}
            />
            <i className="ri-image-line"></i>
          </label>
        </div>

        {/* Attachments Preview */}
        {attachments.length > 0 && (
          <div className="mb-4">
            <div className="text-sm text-zinc-600 mb-2">Attachments:</div>
            <div className="flex flex-wrap gap-2">
              {attachments.map((file) => (
                <div
                  key={file.id}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2 group"
                >
                  <span>{file.name}</span>
                  <button
                    onClick={() => handleRemoveAttachment(file.id)}
                    className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <i className="ri-close-line text-gray-500"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Send Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSendReport}
            className="px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
          >
            Send Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClaimPanel;
