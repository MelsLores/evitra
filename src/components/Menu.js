import React, { useState } from 'react';

const Menu = () => {
    const [submenuVisible, setSubmenuVisible] = useState(false);

    const toggleSubmenu = (e) => {
        setSubmenuVisible(!submenuVisible);
        e.stopPropagation();

    };

    const [submenuVisible2, setSubmenuVisible2] = useState(false);

    const toggleSubmenu2 = (e) => {
        e.stopPropagation();

        setSubmenuVisible2(!submenuVisible2);
    };
/*
    return (
        <body class="bg-menu">
            <div class="container">
                <nav class="menu-lateral">
                    <ul>
                        <li class="item-menu" onClick={toggleSubmenu}>
                            Dashboard
                            {submenuVisible && (
                                <ul class="submenu">
                                   <li class="item-menu" onClick={toggleSubmenu2}>Dashboard 1.1</li>
                                    {submenuVisible2 && (
                                    <ul class="submenu">
                                        <li>Subitem1.1.1</li>
                                    </ul>
                                    )}
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </body>
    );*/

    return(
      <body  class="bg-menu">
        <div class="menu-lateral">
        <ul>
          <li class="item-menu">
            <a href="#">Dashboard</a>
            <ul class="submenu">
              <li class="subitem">
                <a href="#">Submenú 1.1</a>
                <ul class="submenu2">
                  <li ><a href="#">Submenú 1.1.1</a></li>
                  <li><a href="#">Submenú 1.1.2</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Submenú 1.2</a></li>
            </ul>
          </li>
          
          <li class="item-menu">
            <a href="#">Maniobras</a>
            <ul class="submenu">
              <li class="subitem">
                <a href="#">Submenú 1.1</a>
                <ul class="submenu2">
                  <li ><a href="#">Submenú 1.1.1</a></li>
                  <li><a href="#">Submenú 1.1.2</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Submenú 1.2</a></li>
            </ul>
          </li>

          <li class="item-menu">
            <a href="#">Documentos</a>
            <ul class="submenu">
              <li class="subitem">
                <a href="#">Submenú 1.1</a>
                <ul class="submenu2">
                  <li ><a href="#">Submenú 1.1.1</a></li>
                  <li><a href="#">Submenú 1.1.2</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Submenú 1.2</a></li>
            </ul>
          </li>

          <li class="item-menu">
            <a href="#">Planeación</a>
            <ul class="submenu">
              <li class="subitem">
                <a href="#">Submenú 1.1</a>
                <ul class="submenu2">
                  <li ><a href="#">Submenú 1.1.1</a></li>
                  <li><a href="#">Submenú 1.1.2</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Submenú 1.2</a></li>
            </ul>
          </li>

          <li class="item-menu">
            <a href="#">Abastecimientos</a>
            <ul class="submenu">
              <li class="subitem">
                <a href="#">Submenú 1.1</a>
                <ul class="submenu2">
                  <li ><a href="#">Submenú 1.1.1</a></li>
                  <li><a href="#">Submenú 1.1.2</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Submenú 1.2</a></li>
            </ul>
          </li>

          <li class="item-menu">
            <a href="#">Casetas</a>
            <ul class="submenu">
              <li class="subitem">
                <a href="#">Submenú 1.1</a>
                <ul class="submenu2">
                  <li ><a href="#">Submenú 1.1.1</a></li>
                  <li><a href="#">Submenú 1.1.2</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Submenú 1.2</a></li>
            </ul>
          </li>

          <li class="item-menu">
            <a href="#">Patios</a>
            <ul class="submenu">
              <li class="subitem">
                <a href="#">Submenú 1.1</a>
                <ul class="submenu2">
                  <li ><a href="#">Submenú 1.1.1</a></li>
                  <li><a href="#">Submenú 1.1.2</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Submenú 1.2</a></li>
            </ul>
          </li>

          <li class="item-menu">
            <a href="#">Andenes</a>
            <ul class="submenu">
              <li class="subitem">
                <a href="#">Submenú 1.1</a>
                <ul class="submenu2">
                  <li ><a href="#">Submenú 1.1.1</a></li>
                  <li><a href="#">Submenú 1.1.2</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Submenú 1.2</a></li>
            </ul>
          </li>

          <li class="item-menu">
            <a href="#">Almacenes</a>
            <ul class="submenu">
              <li class="subitem">
                <a href="#">Submenú 1.1</a>
                <ul class="submenu2">
                  <li ><a href="#">Submenú 1.1.1</a></li>
                  <li><a href="#">Submenú 1.1.2</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Submenú 1.2</a></li>
            </ul>
          </li>

          <li class="item-menu">
            <a href="#">Embarques</a>
            <ul class="submenu">
              <li class="subitem">
                <a href="#">Submenú 1.1</a>
                <ul class="submenu2">
                  <li ><a href="#">Submenú 1.1.1</a></li>
                  <li><a href="#">Submenú 1.1.2</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Submenú 1.2</a></li>
            </ul>
          </li>


          <li class="item-menu">
            <a href="#">Trazabilidad</a>
            <ul class="submenu">
              <li class="subitem">
                <a href="#">Submenú 1.1</a>
                <ul class="submenu2">
                  <li ><a href="#">Submenú 1.1.1</a></li>
                  <li><a href="#">Submenú 1.1.2</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Submenú 1.2</a></li>
            </ul>
          </li>

          <li class="item-menu">
            <a href="#">Administración</a>
            <ul class="submenu">
              <li class="subitem">
                <a href="#">Submenú 1.1</a>
                <ul class="submenu2">
                  <li ><a href="#">Submenú 1.1.1</a></li>
                  <li><a href="#">Submenú 1.1.2</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Submenú 1.2</a></li>
            </ul>
          </li>

          <li class="item-menu">
            <a href="#">Tarifas</a>
            <ul class="submenu">
              <li class="subitem">
                <a href="#">Submenú 1.1</a>
                <ul class="submenu2">
                  <li ><a href="#">Submenú 1.1.1</a></li>
                  <li><a href="#">Submenú 1.1.2</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Submenú 1.2</a></li>
            </ul>
          </li>

          <li class="item-menu">
            <a href="#">KPIs</a>
            <ul class="submenu">
              <li class="subitem">
                <a href="#">Submenú 1.1</a>
                <ul class="submenu2">
                  <li ><a href="#">Submenú 1.1.1</a></li>
                  <li><a href="#">Submenú 1.1.2</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Submenú 1.2</a></li>
            </ul>
          </li>

          <li class="item-menu">
            <a href="#">Catálogos</a>
            <ul class="submenu">
              <li class="subitem">
                <a href="#">Empresa</a>
                <ul class="submenu2">
                  <li ><a href="#">Submenú 1.1.1</a></li>
                  <li><a href="#">Submenú 1.1.2</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Cliente</a></li>
              <li class="subitem"><a href="#">Unidad Negocio</a></li>
              <li class="subitem"><a href="#">Zona Cobertura</a></li>
              <li class="subitem"><a href="#">Centro Distribución</a></li>
              <li class="subitem"><a href="#">Almacén</a></li>
            </ul>
          </li>

          <li class="item-menu">
            <a href="#">Clasificadores</a>
            <ul class="submenu">
              <li class="subitem">
                <a href="#">Distribución</a>
                <ul class="submenu2">
                  <li ><a href="#">Carreteras</a></li>
                  <li><a href="#">Documento expedido</a></li>
                  <li ><a href="#">Identificador Distancia</a></li>
                  <li ><a href="#">Marca Vehículo</a></li>
                  <li ><a href="#">Motivo Cargo</a></li>
                  <li ><a href="#">Motivo Rechazo</a></li>
                  <li ><a href="#">Motivo no Embarcar</a></li>
                  <li ><a href="#">Orígenes</a></li>
                  <li ><a href="#">Responasble Rechazo</a></li>
                  <li ><a href="#">Sts Evidencia Entrega</a></li>
                  <li ><a href="#">Tipo Caja</a></li>
                  <li ><a href="#">Tipo Camión</a></li>
                  <li ><a href="#">Tipo Placa</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Inventarios</a>
              <ul class="submenu2">
                  <li ><a href="#">Tipo U.M.</a></li>
                  <li><a href="#">Unidad de Medida</a></li>
                  <li ><a href="#">Familia Productos</a></li>
                  <li ><a href="#">Clase Producto</a></li>
                  <li ><a href="#">Tipo de Producto</a></li>
                  <li ><a href="#">Transacción Inventario</a></li>
                  <li ><a href="#">Tarimas</a></li>


                </ul>
              </li>
              <li class="subitem"><a href="#">Documentos</a>
              <ul class="submenu2">
                  <li ><a href="#">Tipo Recibo Documento</a></li>
                  <li><a href="#">Estatus Recibo Documento</a></li>
                  <li ><a href="#">Estatus Documento</a></li>
                  <li ><a href="#">Tipo de Documento</a></li>
                  <li ><a href="#">Motivo Cancela Documento</a></li>
                  <li ><a href="#">Documentos Digitales</a></li>
                  <li ><a href="#">Motivo No Colocado</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Administración</a>
              <ul class="submenu2">
                  <li ><a href="#">Mercados</a></li>
                  <li><a href="#">Segmento de Mercado</a></li>
                  <li ><a href="#">Tipo de Cliente</a></li>
                  <li ><a href="#">Tipo de Cobro</a></li>
                  <li ><a href="#">Clasifica Tipo de Cobro</a></li>
                  <li ><a href="#">Prefijos</a></li>
                  <li ><a href="#">Tipo de Proveedor</a></li>
                  <li ><a href="#">Monedas</a></li>
                  <li ><a href="#">Periodo Anual</a></li>
                  <li ><a href="#">Impuestos</a></li>
                  <li ><a href="#">Productos y Servicios</a></li>
                  <li ><a href="#">Tipo Camión</a></li>
                  <li ><a href="#">Cuentas Contables</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Personal</a>
              <ul class="submenu2">
                  <li ><a href="#">Departamentos</a></li>
                  <li><a href="#">Puestos</a></li>
                  <li ><a href="#">Sufijos</a></li>
                  <li ><a href="#">Tipos de Usuario</a></li>
                </ul>
              </li>

            </ul>
          </li>

          <li class="item-menu">
            <a href="#">Relaciones</a>
            <ul class="submenu">
              <li class="subitem">
                <a href="#">Submenú 1.1</a>
                <ul class="submenu2">
                  <li ><a href="#">Submenú 1.1.1</a></li>
                  <li><a href="#">Submenú 1.1.2</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Submenú 1.2</a></li>
            </ul>
          </li>

          <li class="item-menu">
            <a href="#">Parámetros</a>
            <ul class="submenu">
              <li class="subitem">
                <a href="#">Submenú 1.1</a>
                <ul class="submenu2">
                  <li ><a href="#">Submenú 1.1.1</a></li>
                  <li><a href="#">Submenú 1.1.2</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Submenú 1.2</a></li>
            </ul>
          </li>

          <li class="item-menu">
            <a href="#">Seguridad</a>
            <ul class="submenu">
              <li class="subitem">
                <a href="#">Submenú 1.1</a>
                <ul class="submenu2">
                  <li ><a href="#">Submenú 1.1.1</a></li>
                  <li><a href="#">Submenú 1.1.2</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Submenú 1.2</a></li>
            </ul>
          </li>

          <li class="item-menu">
            <a href="#">Utilerías</a>
            <ul class="submenu">
              <li class="subitem">
                <a href="#">Submenú 1.1</a>
                <ul class="submenu2">
                  <li ><a href="#">Submenú 1.1.1</a></li>
                  <li><a href="#">Submenú 1.1.2</a></li>
                </ul>
              </li>
              <li class="subitem"><a href="#">Submenú 1.2</a></li>
            </ul>
          </li>
        
        </ul>
      </div>
      </body>
    );
};

export default Menu;
