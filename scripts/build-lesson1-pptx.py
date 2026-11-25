# -*- coding: utf-8 -*-
"""Generate lesson-1 install presentation for students."""

from pathlib import Path

from pptx import Presentation
from pptx.util import Pt

OUTPUT = Path(r"d:\react\lesson-1-install.pptx")

SLIDES = [
    (
        "Урок 1. Подготовка ПК и первый запуск",
        [
            "Лендинг по Figma · React + TypeScript",
            "Шаблон react-starter-template с флешки",
        ],
    ),
    (
        "Цель урока",
        [
            "Установить программы для разработки",
            "Скопировать шаблон на свой компьютер",
            "Запустить сайт на http://localhost:8080",
            "Git по желанию — не обязателен для вёрстки",
        ],
    ),
    (
        "Один шаблон для всех",
        [
            "На флешке нет .git и node_modules — так и задумано",
            "Всем: npm install → npm start",
            "Кто хочет Git: ставит Git и делает git init у себя на диске",
            "Husky и линтеры при коммите — только после git init",
        ],
    ),
    (
        "С Git и без — разница",
        [
            "Без Git: только вёрстка, линтеры вручную (npm run lint)",
            "С Git: git init → npm install или npm run prepare",
            "Перед git commit Husky проверяет изменённые файлы",
            "Запуск лендинга: всегда npm start",
        ],
    ),
    (
        "Шаг 1. Visual Studio Code (всем)",
        [
            "Скачать: https://code.visualstudio.com/",
            "Установить, оставить галочку Add to PATH",
            "File → Open Folder → папка react-starter-template",
            "Расширения: ESLint, Prettier, EditorConfig for VS Code",
        ],
    ),
    (
        "Шаг 2. Node.js (всем)",
        [
            "Скачать LTS 22.x: https://nodejs.org/",
            "Установить, перезапустить VS Code",
            "В терминале VS Code: node -v и npm -v",
            "Node не ниже 18, лучше 22",
        ],
    ),
    (
        "Шаг 3. Шаблон с флешки (всем)",
        [
            "Скопировать папку react-starter-template на диск",
            "На флешке нет node_modules и .git",
            "Открыть скопированную папку в VS Code",
        ],
    ),
    (
        "Шаг 4. Первый запуск (всем)",
        [
            "В корне проекта (где package.json):",
            "npm install",
            "npm start → браузер http://localhost:8080",
            "Предупреждение Husky без Git — нормально",
            "Сборка для сдачи: npm run build → папка dist",
        ],
    ),
    (
        "Только вёрстка (без Git)",
        [
            "Git не устанавливаем",
            "Линтеры вручную: npm run lint, npm run stylelint",
            "Автоисправление: lint:fix, stylelint:fix, format",
            "На npm start и npm run build линтеры не мешают",
        ],
    ),
    (
        "Git по желанию",
        [
            "Установить: https://git-scm.com/download/win",
            "Проверка: git --version",
            "В корне проекта: git init",
            "Затем npm install (или npm run prepare, если install уже был)",
            "git status → git add . → git commit -m \"описание\"",
        ],
    ),
    (
        "Если коммит не проходит (с Git)",
        [
            "npm run lint:fix",
            "npm run stylelint:fix",
            "npm run format",
            "Разово без проверки (если разрешили): git commit --no-verify",
            "Отключить Husky: удалить файл .husky/pre-commit",
        ],
    ),
    (
        "Частые проблемы",
        [
            "node / npm не найдены — переустановить Node, перезапустить VS Code",
            "Долгий npm install — нужен интернет, первый раз это нормально",
            "Порт 8080 занят — закрыть другой npm start",
            "contentscript.js в консоли браузера — расширение, не ваш код",
            "Husky / нет линтеров при коммите — git init и npm run prepare",
        ],
    ),
    (
        "Чеклист (всем)",
        [
            "VS Code установлен",
            "Node.js установлен, node -v работает",
            "Шаблон скопирован с флешки",
            "npm install и npm start прошли успешно",
        ],
    ),
    (
        "Чеклист (если выбрали Git)",
        [
            "Git установлен, git --version работает",
            "Выполнены git init и при необходимости npm run prepare",
            "Понимаете git add и git commit",
        ],
    ),
    (
        "Дальше",
        [
            "В проекте: INSTALL.md и README.md",
            "После npm start — справка в браузере на стартовой странице",
            "Верстка: src/widgets, стили *.module.scss, БЭМ",
            "Переменные цветов: src/styles/styles.module.scss",
        ],
    ),
]


def set_body_text(text_frame, lines: list[str]) -> None:
    text_frame.clear()
    for index, line in enumerate(lines):
        paragraph = text_frame.paragraphs[0] if index == 0 else text_frame.add_paragraph()
        paragraph.text = line
        paragraph.level = 0
        paragraph.font.size = Pt(20)


def main() -> None:
    prs = Presentation()
    title_layout = prs.slide_layouts[0]
    bullet_layout = prs.slide_layouts[1]

    for title, body_lines in SLIDES:
        if title == SLIDES[0][0]:
            slide = prs.slides.add_slide(title_layout)
            slide.shapes.title.text = title
            subtitle = slide.placeholders[1]
            subtitle.text = "\n".join(body_lines)
            continue

        slide = prs.slides.add_slide(bullet_layout)
        slide.shapes.title.text = title
        set_body_text(slide.placeholders[1].text_frame, body_lines)

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    prs.save(str(OUTPUT))
    print(f"Saved: {OUTPUT} ({len(prs.slides)} slides)")


if __name__ == "__main__":
    main()
