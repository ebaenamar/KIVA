#!/bin/bash
# Script para iniciar el servidor de KIVA

set -e

cd "$(dirname "$0")/src/server"

echo "🚀 Iniciando servidor KIVA..."
echo "📍 Directorio: $(pwd)"
echo ""

# Verificar que .env existe
if [ ! -f .env ]; then
    echo "⚠️  Archivo .env no encontrado. Creando desde env.example..."
    cp env.example .env
    echo "   Por favor edita src/server/.env y añade tu OPENAI_API_KEY"
    exit 1
fi

# Verificar que las API keys están configuradas
if ! grep -q 'OPENAI_API_KEY="sk-' .env; then
    echo "⚠️  ADVERTENCIA: OPENAI_API_KEY no está configurada en .env"
    echo "   Edita src/server/.env y añade tu API key de OpenAI"
    exit 1
fi

# Detectar si estamos en GitHub Codespaces
if [ -n "$CODESPACES" ]; then
    echo "🐙 Detectado GitHub Codespaces - usando venv..."

    # Crear venv si no existe
    if [ ! -d "venv" ]; then
        echo "📦 Creando entorno virtual..."
        python3 -m venv venv
        source venv/bin/activate
        echo "📥 Instalando dependencias..."
        pip install --upgrade pip
        pip install -r requirements.txt
    else
        source venv/bin/activate
    fi

    echo "✅ Entorno activado"
    echo ""
    echo "🎯 Iniciando servidor en http://0.0.0.0:7860"
    echo ""
    python main.py

# Intentar usar conda si está disponible (local)
elif command -v conda &> /dev/null; then
    echo "🐍 Usando conda..."

    # Crear entorno si no existe
    if ! conda env list | grep -q "^riverst "; then
        echo "📦 Creando entorno conda 'riverst'..."
        conda create -n riverst python=3.11 -c conda-forge -y
        eval "$(conda shell.bash hook)"
        conda activate riverst
        conda install -c conda-forge ffmpeg -y
        pip install -r requirements.txt
    else
        eval "$(conda shell.bash hook)"
        conda activate riverst
    fi
else
    echo "🐍 Usando venv..."
    
    # Crear venv si no existe
    if [ ! -d "venv" ]; then
        echo "📦 Creando entorno virtual..."
        python3 -m venv venv
        source venv/bin/activate
        pip install --upgrade pip
        pip install -r requirements.txt
    else
        source venv/bin/activate
    fi
fi

echo "✅ Entorno activado"
echo "✅ API keys configuradas"
echo ""
echo "🌐 Servidor disponible en: http://localhost:7860"
echo "📝 Presiona Ctrl+C para detener el servidor"
echo ""

# Iniciar servidor
python main.py
