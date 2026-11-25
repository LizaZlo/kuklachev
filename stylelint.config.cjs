/**
 * Stylelint для src/**/*.css и src/**/*.scss
 *
 * customSyntax postcss-scss — вложенность, @use и переменные Sass
 * stylelint-scss — правила для SCSS вместо стандартного at-rule-no-unknown
 * stylelint-order — фиксированный порядок CSS-свойств (как в чеклисте вёрстки)
 * selector-class-pattern — БЭМ в CSS Modules (block, block__element, block__element_modifier)
 *
 * Полный список правил — в объекте ниже (раньше лежал в .stylelintrc.json).
 */
module.exports = require('./.stylelintrc.json');
