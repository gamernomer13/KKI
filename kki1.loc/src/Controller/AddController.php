<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
class AddController extends AbstractController
{
    /**
     * @Route("/Application/add")
     */
    public function number(): Response
    {
        return $this->render('add.html.twig');
    }
}
