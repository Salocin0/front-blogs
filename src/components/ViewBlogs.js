import React, { useEffect, useState } from 'react';
import ReactMarkdown from "react-markdown"

function ViewBlogs() {
  const [blogs, setBlogs] = useState([]);

  const fallbackBlogs = [
    {
      _id: "1",
      title: "Introducción a JavaScript",
      content: `# Introducción a JavaScript\n\nJavaScript es uno de los lenguajes de programación más populares del mundo.\n\n## ¿Qué es JavaScript?\n\nJavaScript es un lenguaje de programación interpretado, ligero y poderoso. Algunas de sus características incluyen:\n\n- **Lenguaje Interpretado**\n- **Orientado a objetos**\n- **Dinámico**\n\n### Ejemplo de Código\n\`\`\`javascript\nconsole.log('Hola Mundo');\n\`\`\``
    },
    {
      _id: "2",
      title: "Fundamentos de React",
      content: `# Fundamentos de React\n\nReact es una biblioteca para construir interfaces de usuario.\n\n## Componentes\n\nLos componentes en React son piezas reutilizables de la UI que permiten estructurar la aplicación de manera eficiente. Ejemplo básico de un componente en React:\n\`\`\`jsx\nfunction Saludo() {\n  return <h1>¡Hola Mundo!</h1>;\n}\n\`\`\`\n\n### ¿Por qué React?\n\n- Declarativo\n- Basado en componentes\n- Fácil integración con otros frameworks`
    },
    {
      _id: "3",
      title: "Tutorial de Markdown",
      content: `# Tutorial de Markdown\n\nMarkdown es un lenguaje de marcado ligero que se utiliza para dar formato a texto.\n\n## Encabezados\nPuedes crear encabezados con \`#\`:\n\n\`\`\`markdown\n# Encabezado 1\n## Encabezado 2\n### Encabezado 3\n\`\`\`\n\n## Listas\nPuedes crear listas no ordenadas y ordenadas:\n\n- Elemento 1\n- Elemento 2\n- Elemento 3\n\n1. Elemento A\n2. Elemento B\n3. Elemento C\n\n## Código\nPara escribir bloques de código, puedes usar tres acentos graves:\n\n\`\`\`\nconsole.log('Hola Markdown');\n\`\`\``
    }
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blogs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setBlogs(result);
      } catch (error) {
        console.error("Error fetching blogs, showing fallback examples:", error);
        setBlogs(fallbackBlogs); // Si falla, se muestran los ejemplos
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="container">
      <h2>View Blogs</h2>
      <div className="list-group">
        {blogs.map(blog => (
          <div key={blog._id} className="list-group-item">
            <h4>{blog.title}</h4>
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewBlogs;
