

<!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="home" class="brand-link">
      <!-- <img src="{{ asset('backend/dist/img/mine/logoColegio.png')}}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3 bg-white" style="opacity: .8"> -->
      <span class="brand-text font-weight-light"> SuperMercado XYZ</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="{{ asset('backend/dist/img/user2-160x160.jpg')}}" class="img-circle elevation-2" alt="User Image">
        </div>
       <p style="color: #fff; margin-left:10px;">{{ Auth::user()->name }}</p>
          
      </div>

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item">
            <a href="home" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Dashboard
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="{{route('clients.index')}}" class="nav-link">
              <i class="fa-solid fa-user nav-icon"></i>
              <p>
                Client
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="{{route('products.index')}}" class="nav-link">
            <i class="fa-solid fa-file-invoice-dollar nav-icon"></i>
              <p>
                Products
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="{{route('orders.index')}}" class="nav-link">
              <i class="fa-solid fa-scroll nav-icon"></i>
              <p>
                Orders
              </p>
            </a>
          </li>
          
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>