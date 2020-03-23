<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
class DeleteController extends AbstractController
{
    /**
     * @Route("/application/deletelznop")
     */
    public function number(): Response
    {
        return $this->render('DeleteZnop.html.twig');
    }
}
