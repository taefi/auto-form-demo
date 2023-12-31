import MainLayout from 'Frontend/views/MainLayout.js';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Basic from "Frontend/views/person/basic";
import TemplateString from "Frontend/views/person/template-string";
import TemplateStringVisibleField from "Frontend/views/person/template-id-version-visible";
import TemplateFieldColspan from "Frontend/views/person/template-fieldcolspan";
import TemplateFieldColspanResponsive from "Frontend/views/person/template-fieldcolspan-responsive";
import CustomRenderer from "Frontend/views/person/custom-renderer";
import OverridingField from "Frontend/views/person/overriding-field";
import CrudBasic from "Frontend/views/person/crud-basic";

export const routes = [
  {
    element: <MainLayout />,
    handle: { title: 'Main' },
    children: [
      { path: '/', element: <Basic />, handle: { title: 'Basic' } },
      { path: '/basic', element: <Basic />, handle: { title: 'Basic' } },
      { path: '/string-template', element: <TemplateString />, handle: { title: 'String Template' } },
      { path: '/string-template-visible-fields', element: <TemplateStringVisibleField />, handle: { title: 'Template Manipulate Fields Visibility' } },
      { path: '/template-field-colspan', element: <TemplateFieldColspan />, handle: { title: 'Template Field Colspan' } },
      { path: '/template-field-colspan-responsive', element: <TemplateFieldColspanResponsive />, handle: { title: 'Template & Responsive Steps' } },
      { path: '/custom-renderer', element: <CustomRenderer />, handle: { title: 'Custom Layout Renderer' } },
      { path: '/custom-field', element: <OverridingField />, handle: { title: 'Overriding Fields' } },
      { path: '/crud-basic', element: <CrudBasic />, handle: { title: 'Crud' } },
    ],
  },
] as RouteObject[];

export default createBrowserRouter(routes);
