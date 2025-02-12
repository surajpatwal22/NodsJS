// Delete Alert
const deleteAlert = document.querySelectorAll(".deleteAlert");
var table = $("#dashboardTable")
  .DataTable({
    dom: "ZBfrltip",
    buttons: [
      {
        extend: "excel",
        text: '<i class="fa-solid fa-file-excel"></i> Export Report',
        className: "btn btn-sm border-0",
      },
    ],
    searching: false,
    pageLength: 10,
    select: true,
    lengthChange: false,
    language: {
      paginate: {
        next: '<i class="fa-solid fa-angle-right"></i>',
        previous: '<i class="fa-solid fa-angle-left"></i>',
      },
    },
  })
deleteAlert.forEach((element) => {
  element.addEventListener("click", function () {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  });
});

// List all Properties Datatable
var table = $("#allcommercialProperties")
  .DataTable({
    dom: "ZBfrltip",
    buttons: [
      {
        extend: "excel",
        text: '<i class="fa-solid fa-file-excel"></i> Export Report',
        className: "btn btn-sm border-0",
      },
    ],
    searching: false,
    pageLength: 20,
    select: true,
    lengthChange: false,
    language: {
      paginate: {
        next: '<i class="fa-solid fa-angle-right"></i>',
        previous: '<i class="fa-solid fa-angle-left"></i>',
      },
    },
  })