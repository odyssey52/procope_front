const template = (variables, { tpl }) => {
  return tpl`
    ${variables.imports};

    const ${variables.componentName} = (
      { size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string },
      ref: Ref<SVGSVGElement>
    ) => (
      ${variables.jsx}
    );

    ${variables.exports}
  `;
};

module.exports = template;
